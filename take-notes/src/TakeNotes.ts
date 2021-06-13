import { html, css, LitElement, property } from 'lit-element';

export class TakeNotes extends LitElement {
  static styles = css`
    #take-notes-text-area {
      position: fixed;
      left: 75%;
      top: 5%;
      margin-left: -50px;
    }
    .button {
      position: fixed;
      left: 80%;
      top: 85%;
      font-size: 16px;
      padding: 15px 32px;
      margin-right: -100px;
      background-color: #4caf50; /* Green */
      border: none;
      color: white;
      cursor: pointer;
      transition-duration: 0.4s;
    }
    .button2:hover {
      box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
        0 17px 50px 0 rgba(0, 0, 0, 0.19);
    }
  `;

  @property() notesList = ['Here are your notes:\n'];

  addToNotes() {
    const note = this.getSelText()?.toString() || '';
    if (note) {
      this.notesList.push('*' + note);
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
      <div id="take-notes-text-area" name="take-notes-text-area">
        <textarea rows="35" cols="50">
        ${this.notesList.map(noteItem => `${noteItem}\n\n`)}
      </textarea
        >
      </div>
      <button @click=${this.addToNotes} class="button button2">
        Take Note!
      </button>
    `;
  }
}
