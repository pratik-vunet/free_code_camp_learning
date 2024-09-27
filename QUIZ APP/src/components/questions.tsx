export interface Question {
    question: string;
    options: string[];
    answer: string;
  }
  
  const questions: Question[] = [
    {
      question: "1. What does HTML stand for?",
      options: ["Hyper Text Markup Language", "High Text Markup Language", "Hyperlink and Text Markup Language", "Hyper Text Multi Language"],
      answer: "Hyper Text Markup Language",
    },
    {
      question: "2. Which HTML element is used to define the title of a document?",
      options: ["<head>", "<title>", "<meta>", "<header>"],
      answer: "<title>",
    },
    {
      question: "3. What is the correct HTML element for inserting a line break?",
      options: ["<break>", "<br>", "<lb>", "<line>"],
      answer: "<br>",
    },
    {
      question: "4.Which of the following is a valid way to link a CSS file in an HTML document?",
      options: ["<link rel='stylesheet' href='styles.css'>", "<stylesheet>styles.css</stylesheet>", "<css>styles.css</css>", "<link src='styles.css'>"],
      answer: "<link rel='stylesheet' href='styles.css'>",
    },
    {
      question: "5. Which property is used to change the font of an element in CSS?",
      options: ["font-weight", "font-family", "font-style", "font-size"],
      answer: "font-family",
    },
    {
      question: "6. How do you select an element with the id 'header' in CSS?",
      options: ["#header", ".header", "header", "*header"],
      answer: "#header",
    },
    {
      question: "7. What is the default display value of a <div> element?",
      options: ["inline", "block", "inline-block", "none"],
      answer: "block",
    },
    {
      question: "8. Which CSS property controls the text size?",
      options: ["text-style", "text-size", "font-size", "font-style"],
      answer: "font-size",
    },
    {
      question: "9. Which of the following is the correct way to add a comment in CSS?",
      options: ["// comment", "<!-- comment -->", "/* comment */", "' comment"],
      answer: "/* comment */",
    },
    {
      question: "10. What does the z-index property in CSS do?",
      options: ["Controls the visibility of an element", "Sets the stacking order of overlapping elements", "Changes the opacity of an element", "Sets the position of an element"],
      answer: "Sets the stacking order of overlapping elements",
    },
    
  ];
  
  export default questions;
  