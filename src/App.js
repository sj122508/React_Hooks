
import React from 'react';
import './App.css';
import UseState from './components/UseState';
import UseEffect from './components/UseEffect';
import MimicComponentWillUnmount from './utils/MimicComponentWillUnmount';
import UseEffectWithAxios from './components/UseEffectWithAxios';
import ComponentC from './components/UseContext/ComponentC';
import Counter from './components/UseReducer/BasicUseReducer';
import ComplexUseReducer from './components/UseReducer/ComplexUseReducer';
import MultipleUseReducer from './components/UseReducer/MultipleUseReducer';
import Main from './components/UseReducerWithContext/Main';
import DataFetchingOne from './components/UseReducerWithDataFetching/DataFetchingOne';
import DataFetchingTwo from './components/UseReducerWithDataFetching/DataFetchingTwo';
import ParentComponent from './components/UseCallback/ParentComponent';
import FocusInput from './components/UseRef/FocusInput';
import HookTimer from './components/UseRef/HookTimer';
import DocTitleOne from './components/CustomHooks/DocTitleOne';
import DocTitleTwo from './components/CustomHooks/DocTitleTwo';
import CounterOne from './components/CustomHooks/Hooks/CounterOne';
import CounterTwo from './components/CustomHooks/Hooks/CounterTwo';
import UserForm from './components/CustomHooks/Hooks/UserForm';

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

function App() {
  
  return (
    <div className="App">
      
      {/* <UseState/> */}
      {/* <UseEffect /> */}
      {/* <MimicComponentWillUnmount /> */}
      {/* <UseEffectWithAxios /> */}
      {/* <UserContext.Provider value={'James'} >
        <ChannelContext.Provider value={'Hooks'}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider> */}
      {/* <Counter /> */}
      {/* <ComplexUseReducer /> */}
      {/* <MultipleUseReducer /> */}
      {/* <Main /> */}
      {/* <DataFetchingOne /> */}
      {/* <DataFetchingTwo /> */}
      {/* <ParentComponent /> */}
      {/* <FocusInput /> */}
      {/* <HookTimer /> */}
      {/* <DocTitleOne />
      <DocTitleTwo /> */}
      {/* <CounterOne />
      <CounterTwo /> */}
      <UserForm />
    </div>
  );
}

export default App;
