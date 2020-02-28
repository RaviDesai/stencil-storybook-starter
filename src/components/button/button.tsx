import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-button',
  styleUrl: 'button.scss',
  shadow: true
})
export class MyButton {
  /**
   * The button's disabled state.
   */
  @Prop() disabled = false;

  render() {
    return <button type="button"><slot /></button>;
  }
}
