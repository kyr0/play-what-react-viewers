import * as React from "react";
import PW from 'play-what';
import "./Fretboard.css";

const FretLabel = props => {
    const { notes, noteIndex, minIndex, maxIndex } = props;

    const note = PW.v2.Theory.findNoteWithPitch(notes, noteIndex, true);
    // const minNote = PW.v2.Theory.getNoteByNoteIndex(fretMapping.notes, minIndex);
    // const maxNote = PW.v2.Theory.getNoteByNoteIndex(fretMapping.notes, maxIndex);

    const styles = {};//fretMapping.colorFn(note, minNote, maxNote);
    const label = note ? note.d : '';//fretMapping.labelFn(note);

    return (
        <div className='fret-label' style={styles} onClick={() => null}>
            {label}
        </div>
    );
}

export default FretLabel;