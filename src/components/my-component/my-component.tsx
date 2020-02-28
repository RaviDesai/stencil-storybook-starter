import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The last name
   */
  @Prop() last: string;

  private getName(): string {
    return `${this.first} ${this.last}`;
  }

  render() {
    return <div>Hello, World! I'm {this.getName()}</div>;
  }
}
