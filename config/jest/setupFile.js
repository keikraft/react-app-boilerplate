import 'jest-localstorage-mock';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// Configure Enzyme to work with React
configure({adapter: new Adapter()});
