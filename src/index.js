import React, { useRef } from "react";
import MonacoEditor from "react-monaco-editor";
import Select from "antd/es/select";
import 'antd/es/select/style/css';
import "./index.css";

const { Option } = Select;

const proxyLangage = {
	'C': 'cpp',
	"C++": 'cpp',
	'Golang': 'go',
	'Java': 'java',
	'Python2': 'python',
	'Pytho3': 'python',
	'Javascript': 'javascript',
}

const PcEditor = ({ code, language, options, handleChange, handleMount }) => {
	const editorModel = useRef(null)
	const onChange = (newValue, e) => {
		if(handleChange) {
			handleChange(newValue,e)
		}
	}
    const editorDidMount = (editor, monaco) => {
		// editor.focus();
		// console.log('mount',editor,monaco);
		editorModel.current = editor.getModel()
        if (handleMount) {
            handleMount(editor, monaco);
        }
	};
	const switchLanguage = (value) => {
		editorModel.current.setValue(`// ${value} type you code`)
		editorModel.current.updateOptions({
			...options,
			language: proxyLangage[value]
		})
		
	}
    return (
        <div className="editor-wrap">
            <div>
                <Select
                    defaultValue="Java"
                    style={{ width: 120 }}
                    onChange={switchLanguage}
                >
                    <Option value="C">C</Option>
                    <Option value="C++">C++</Option>
                    <Option value="Golang">Golang</Option>
                    <Option value="Java">Java</Option>
                    <Option value="Python2">Python2</Option>
                    <Option value="Python3">Python3</Option>
                    <Option value="Javascript">Javascript</Option>
                </Select>
            </div>
            <MonacoEditor
                language={language || "javascript"}
                theme="vs-dark"
                value={code || "//type you code..."}
                options={options}
                onChange={onChange}
                editorDidMount={editorDidMount}
            />
        </div>
    );
};

export default PcEditor;
