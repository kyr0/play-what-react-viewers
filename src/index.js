import Fretboard from './Modules/Fretboard/Fretboard';
import Keyboard from './Modules/Keyboard/Keyboard';
import Graph from './Modules/Graph/Graph';
import Rhythm from './Modules/Rhythm/Rhythm';
import TrueScale from './Modules/TrueScale/TrueScale';
import HarmonicSeries from './Modules/HarmonicSeries/HarmonicSeries';

import Concept from './Modules/Concept/Concept';
import Progression from './Modules/Progression/Progression';
import Chart from './Modules/Chart/Chart';

import ErrorBoundary from './UI/ErrorBoundary';
import ButtonInput from './UI/ButtonInput/ButtonInput';
import ConceptInput from './UI/ConceptInput/ConceptInput';

import './index.css';

const Modules = {
    Fretboard,
    Keyboard,
    Graph,
    TrueScale,
    HarmonicSeries,
    Concept,
    Progression,
    Chart,
    Rhythm,
};

const UI = {
    ErrorBoundary,
    ButtonInput,
    ConceptInput
};

export default {
    Modules,
    UI
 };