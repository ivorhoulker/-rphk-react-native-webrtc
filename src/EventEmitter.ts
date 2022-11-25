import { NativeEventEmitter, NativeModules } from 'react-native';

const { WebRTCModule } = NativeModules;

const EventEmitter = new NativeEventEmitter(WebRTCModule);

export default EventEmitter;
