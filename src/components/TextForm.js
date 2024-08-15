import React , {useState} from 'react'

export default function TextForm(props) {

    const clearText = () =>{
        setText("");
    };

const handleOnChange = (event) =>{
    console.log("On change");
    setText(event.target.value)
};


const handleUpClick = () =>{
    console.log("Uppercase was clicked");
    let newtext = text.toUpperCase();
    setText(newtext);   //always used under a event handler, basically 
                        //without refreshing the whole page content will be updated
    calcuateSummary();

};

const calcuateSummary=()=>{

    let i =0;
    let wordCount=0;
    let mycounter=0;
    while(i<text.length){
        if(text.charAt(i)===" "||text.charAt(i)==="\n"){
            wordCount++;
        }
        if(text.charAt(i)=="\n" || text.charAt(i)=="\t"){
                mycounter++;
        }
        i++;
    }
    let lineCount = text.split("\n").length; 
    if(text.length==0){
        setWords(wordCount);
         
    }
    else{
        setWords(wordCount+1);
      
    }
    setLines(lineCount);
    setCharacters(text.length - mycounter);
}

    const [text,setText] = useState("enter text here");   //state variable or hook
    // text = "enter text here please !!"  //wrong way to change the state
    // setText("enter text here please !!")   //correct way to change the state


    const[words,setWords] = useState(0);
    const[lines,setLines] = useState(0);
    const[characters,setCharacters] = useState(0);

  return (    
    <>
    <div className="form-group">
    <label htmlFor="exampleFormControlTextarea1">
        <h1> {props.heading}</h1>
    </label>
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" 
    value ={text} onChange={handleOnChange}></textarea>

    <button className = "btn btn-primary my-3"
     onClick ={handleUpClick}>Convert to Uppercase </button>

     <button className ="btn btn-primary my-3 mx-2" onClick = {clearText}> Clear Text  </button>
  </div>


<div className="summary my-2">
<h1> Your text summary </h1>

<p> There are {words} words , {characters} characters and {lines} lines.</p>
<p>
    An average person will require {words * 0.08} minutes to read the text
</p>
</div>



  </>
  )
}
