import { useState } from "react";
import TabButton from "./TabButton";
import { EXAMPLES } from "../data";
import Section from "./Section";
import Tabs from "./Tabs";

export default function Examples() {

    //this must not be nested inside another function // you must call it on the top level op the component function
    // managing component specific state // By default, react only renders a component once
    // useState creates the opportunity to re-execute (re-render)
    const [selectedTopic, setSelectedTopic] = useState('');
    // useState will always give back an array with exactly 2 elements. 
    //The first element is the actual data we are managing. The second element will always be a function provided by React that can be executed tp UPDATE STATE
    //Executing the second function will (also) tell react to re-render this component

    function handleSelect(selectedButton) {
        // selectedButton => 'components', 'jsx', 'props', 'state'
        //if check
        setSelectedTopic(selectedButton);
        //console.log(selectedTopic);
    }


    return (
        <Section title="Examples" id="examples">
            <Tabs buttons={<>
                <TabButton onClick={() => handleSelect('components')} isSelected={selectedTopic === 'components'} >Components</TabButton>
                <TabButton onClick={() => handleSelect('jsx')} isSelected={selectedTopic === 'jsx'}>JSX</TabButton>
                <TabButton onClick={() => handleSelect('props')} isSelected={selectedTopic === 'props'}>Props</TabButton>
                <TabButton onClick={() => handleSelect('state')} isSelected={selectedTopic === 'state'}>State</TabButton>
            </>
            }>
                {!selectedTopic && <p>Please select a topic.</p>}
                {selectedTopic &&
                    <div id="tab-content">
                        <h3>{EXAMPLES[selectedTopic].title}</h3>
                        <p>{EXAMPLES[selectedTopic].description}</p>
                        <pre>
                            <code>
                                {EXAMPLES[selectedTopic].code}
                            </code>
                        </pre>
                    </div>}
            </Tabs>
        </Section>


    )
}