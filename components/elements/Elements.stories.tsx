import { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  title: "Elements",
};

export default meta;

export const Text: StoryObj = {
  render: () => {
    return (
      <div>
        <h1>h1 - Lorem Ipsum Dolor Sit Amet</h1>
        <h2>h2 - Lorem Ipsum Dolor Sit Amet</h2>
        <h3>h3 - Lorem Ipsum Dolor Sit Amet</h3>
        <h4>h4 - Lorem Ipsum Dolor Sit Amet</h4>
        <h5>h5 - Lorem Ipsum Dolor Sit Amet</h5>
        <h6>h6 - Lorem Ipsum Dolor Sit Amet</h6>
        <a href="#">a - Lorem Ipsum Dolor Sit Amet</a>
        <p>
          p - Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. <b>At vero eos et accusam</b> et justo duo dolores
          et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
          Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, <i>sed diam nonumy eirmod</i> tempor invidunt ut
          labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos
          et accusam et justo duo dolores et ea rebum. Stet clita kasd
          gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
        </p>
        <span>
          span - Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
          diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
          erat, sed diam voluptua. <b>At vero eos et accusam</b> et justo duo
          dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
          sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
          consetetur sadipscing elitr, <i>sed diam nonumy eirmod</i> tempor
          invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
          At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
          kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
          amet.
        </span>
      </div>
    );
  },
};

export const Table: StoryObj = {
  render: () => {
    return (
      <table>
        <thead>
          <tr>
            <th>Header 1</th>
            <th>Header 2</th>
            <th>Header 3</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Cell 1 - Lorem ipsum dolor sit amet</td>
            <td>Cell 2 - Lorem ipsum dolor sit amet</td>
            <td>Cell 3 - Lorem ipsum dolor sit amet</td>
          </tr>
          <tr>
            <td>Cell 1 - Lorem ipsum dolor sit amet</td>
            <td>Cell 2 - Lorem ipsum dolor sit amet</td>
            <td>Cell 3 - Lorem ipsum dolor sit amet</td>
          </tr>
          <tr>
            <td>Cell 1 - Lorem ipsum dolor sit amet</td>
            <td>Cell 2 - Lorem ipsum dolor sit amet</td>
            <td>Cell 3 - Lorem ipsum dolor sit amet</td>
          </tr>
        </tbody>
      </table>
    );
  },
};
