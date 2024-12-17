#!/bin/bash
# Set the pipefail option.
set -o pipefail

# Get the Vercel API endpoints.
GET_DEPLOYMENTS_ENDPOINT="https://api.vercel.com/v6/deployments"
DELETE_DEPLOYMENTS_ENDPOINT="https://api.vercel.com/v13/deployments"

# Create a list of deployments.
deployments=$(curl -s -X GET "$GET_DEPLOYMENTS_ENDPOINT/?projectId=$VERCEL_PROJECT_ID" -H "Authorization: Bearer $VERCEL_TOKEN ")

# Filter the deployments list by meta.base_hash === meta tag.
filtered_deployments=$(echo "${deployments}" | jq --arg BRANCH_NAME "$BRANCH_NAME" '[.deployments[] | select(.meta.githubCommitRef | type == "string" and contains($BRANCH_NAME)) | .uid] | join(",")')
filtered_deployments="${filtered_deployments//\"/}" # Remove double quotes

# Clears the values from filtered_deployments
IFS=',' read -ra values <<<"$filtered_deployments"

echo "Branch name: ${BRANCH_NAME}"
echo "Filtered deployments: ${filtered_deployments}"

# Iterate over the filtered deployments list.
for uid in "${values[@]}"; do
    echo "Deleting Deployment ID: ${uid}"

    delete_url="${DELETE_DEPLOYMENTS_ENDPOINT}/${uid}?projectId=${VERCEL_PROJECT_ID}"
    echo "Delete URL: ${delete_url}"

    # Make DELETE a request to the /v13/deployments/{id} endpoint.
    curl -X DELETE "$delete_url" -H "Authorization: Bearer $VERCEL_TOKEN"

    echo "Deleted!"
done