class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here....");
   //Create a input box to enter the number
    this.input2 = createInput("enter the corrct option number")

    this.button = createButton('Submit');
    //Create elements for One question (h3) and 4 options (h4)
    this.Question = createElement('h3')
    

    this.option1 = createElement('h4');
    this.option2 = createElement('h4');
    this.option3 = createElement('h4');
    this.option4 = createElement('h4');
    

    this.message = createElement("h2")
  }

  hide(){
     this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
    this.message.hide();




  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);



    this.Question.html("Who is present PM of india")

    this.option1.html("1:narendra modi");
    this.option2.html("2:rahul gandhi");
    this.option3.html("3:jawaharlal nehru");
    this.option4.html("4:Amit shah");

    this.Question.position(100,50)

    this.option1.position(100,80);
    this.option2.position(100,100);
    this.option3.position(100,120);
    this.option4.position(100,140);


    this.input1.position(150, 230);
    this.button.position(290, 300);
    this.input2.position(399,230);

    

    // Add a mousepressed action when the button is clicked Display the this.message
    this.button.mousePressed(()=>{
     this.message.html("Thank you, your answer has been submitted")
     this.message.position(290,300);
    })


  }
}
