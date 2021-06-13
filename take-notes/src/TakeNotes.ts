import { html, css, LitElement, property } from 'lit-element';

export class TakeNotes extends LitElement {
  static styles = css`
    :host {
    }

    #take-notes-text-area {
      // position: fixed;
      // right: 0;
      // margin-top: 30px;
      // margin-right: 30px;
    }
  `;

  @property({ type: String }) title = "Let's study!";

  @property() notesList = ['Here are your notes:', '1', '2'];

  addToNotes() {
    const note = this.getSelText()?.toString() || '';
    if (note) {
      this.notesList.push(note);
      this.requestUpdate();
    }
  }

  getSelText() {
    let txt: Selection | null;
    if (window.getSelection) {
      txt = window.getSelection();
    } else if (document.getSelection) {
      txt = document.getSelection();
    } else return;
    return txt;
  }

  render() {
    return html`
      <h2>${this.title}</h2>
      <textarea
        id="take-notes-text-area"
        name="take-notes-text-area"
        rows="35"
        cols="50"
      >
        ${this.notesList.map(noteItem => `${noteItem}\n`)}
      </textarea
      >
      <button @click=${this.addToNotes}>Take Note!</button>
    `;
  }
}
