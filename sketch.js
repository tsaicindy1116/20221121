var face_size=[]
var place_x=[]
var place_y=[]
var song
var songIsplay=false
var amp
var music_btn=[]
var mouse_btn=[]
var vol
var m_x,m_y
var Speech_btn=[]
var mosueIsplay=true
var myRec = new p5.SpeechRec();
var result=[]
function preload(){
  song = loadSound("海綿寶寶主題曲(中文版).mp3");
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES)
music_btn = createButton("開始")
music_btn.position(10,10)
music_btn.size(175, 50);
music_btn.style('background-color', 'black');
music_btn.style('font-size', '15px');
music_btn.style('color', 'white');
music_btn.mousePressed(music_btn_pressed)

mouse_btn = createButton("停止")
  mouse_btn.position(200,10)
  mouse_btn.size(175, 50);
  mouse_btn.style('background-color', 'black');
  mouse_btn.style('font-size', '15px');
  mouse_btn.style('color', 'white');
  mouse_btn.mousePressed(mouse_btn_pressed)

  Speech_btn = createButton("語音辨識(start/stop)")
  Speech_btn.position(390,10)
  Speech_btn.size(175, 50);
  Speech_btn.style('background-color', 'black');
  Speech_btn.style('font-size', '15px');
  Speech_btn.style('color', 'white');
  Speech_btn.mousePressed(Speech_btn_pressed)

  for (var i=0;i<5;i++){
  face_size[i] = random(1,4)
  place_x [i]= random(10,width)
  place_y [i]= random(10+100,height)
  }
}
function music_btn_pressed(){
  song.stop()
  song.play()
  songIsplay = true
  amp=new p5.Amplitude()  
  music_btn.style('background-color','#6c757d')
  mouse_btn.style('background-color','black')
  Speech_btn.style('background-color','black')

}
function mouse_btn_pressed(){
  song.pause()
  songIsplay = false
  music_btn.style('background-color','black')
  mouse_btn.style('background-color','#6c757d')
  Speech_btn.style('background-color','black')
}
function Speech_btn_pressed(){
  myRec.onResult = showResult;
  myRec.start();  
  music_btn.style('background-color','black')
  mouse_btn.style('background-color','black')
  Speech_btn.style('background-color','#6c757d')
}
function showResult()
	{
    console.log(myRec.resultString)
		if(myRec.resultValue==true) {
			// background(192, 255, 192);
			// text(myRec.resultString, width/2, height/2);
      
      result = myRec.resultString
      if(myRec.resultString==="Start.")
      {
        music_btn_pressed()
      }
      if(myRec.resultString==="Stop.")
      {
         
          mouse_btn_pressed()
        }
		}
	}


function draw() {
  background(220);
  push()
    
  textSize(50)
  fill(0)
  text(result,600,55)
  pop()
  for(var j=0;j<5;j++)
  {
push()
translate(place_x[j],place_y[j])
  rectMode(CENTER)
  fill(255,255,0)//黃色
  strokeWeight(2)
  rect( face_size[j],face_size[j],200/face_size[j],250/face_size[j])//黃色身體
  rect(50/face_size[j]+face_size[j],face_size[j]+160/face_size[j],15/face_size[j],100/face_size[j])//雙腿
  rect(-50/face_size[j]+face_size[j],face_size[j]+160/face_size[j],15/face_size[j],100/face_size[j])
  if(!songIsplay){
    rect(110/face_size[j]+face_size[j],62/face_size[j]+face_size[j],15/face_size[j],100/face_size[j])//雙臂
  }
  else{
    vol = amp.getLevel()
  rect(110/face_size[j]+face_size[j],map(vol,0,1,0,3.5)*62/face_size[j]+face_size[j],15/face_size[j],100/face_size[j])
  }
  if(!songIsplay){
    rect(-110/face_size[j]+face_size[j],62/face_size[j]+face_size[j],15/face_size[j],100/face_size[j])
  }
  else{
    vol = amp.getLevel()
  rect(-110/face_size[j]+face_size[j],map(vol,0,1,0,3.5)*62/face_size[j]+face_size[j],15/face_size[j],100/face_size[j])
    
  }
  fill(0)
  rect(-38/face_size[j]+face_size[j],-100/face_size[j]+face_size[j],3/face_size[j],20/face_size[j])//眼睫毛
  rect(-30/face_size[j]+face_size[j],-100/face_size[j]+face_size[j],3/face_size[j],20/face_size[j])
  rect(-46/face_size[j]+face_size[j],-100/face_size[j]+face_size[j],3/face_size[j],20/face_size[j])
  rect(38/face_size[j]+face_size[j],-100/face_size[j]+face_size[j],3/face_size[j],20/face_size[j])
  rect(30/face_size[j]+face_size[j],-100/face_size[j]+face_size[j],3/face_size[j],20/face_size[j])
  rect(46/face_size[j]+face_size[j],-100/face_size[j]+face_size[j],3/face_size[j],20/face_size[j])
  fill(255)//白色
  rect(0/face_size[j]+face_size[j],70/face_size[j]+face_size[j],200/face_size[j],50/face_size[j])//白色襯衫
  if(!songIsplay){
    triangle(100/face_size[j]+face_size[j],-10/face_size[j]+face_size[j],100/face_size[j]+face_size[j],18/face_size[j]+face_size[j],123/face_size[j]+face_size[j],18/face_size[j]+face_size[j])//兩邊袖子
  }
  else{
    vol = amp.getLevel()
    triangle(100/face_size[j]+face_size[j],map(vol,0,10,0,5)*-10/face_size[j]+face_size[j],100/face_size[j]+face_size[j],map(vol,0,1,0,5)*18/face_size[j]+face_size[j],123/face_size[j]+face_size[j],map(vol,0,1,0,5)*18/face_size[j]+face_size[j])
  }
  if(!songIsplay){
    triangle(-100/face_size[j]+face_size[j],-10/face_size[j]+face_size[j],-100/face_size[j]+face_size[j],18/face_size[j]+face_size[j],-123/face_size[j]+face_size[j],18/face_size[j]+face_size[j])
  }
  else{
    vol = amp.getLevel()
    triangle(-100/face_size[j]+face_size[j],map(vol,0,1,0,5)/-10/face_size[j]+face_size[j],-100/face_size[j]+face_size[j],map(vol,0,1,0,8)*18/face_size[j]+face_size[j],-123/face_size[j]+face_size[j],map(vol,0,1,0,8)*18/face_size[j]+face_size[j])
  }
  rect(50/face_size[j]+face_size[j],190/face_size[j]+face_size[j],15/face_size[j],40/face_size[j])//襪子
  rect(-50/face_size[j]+face_size[j],190/face_size[j]+face_size[j],15/face_size[j],40/face_size[j])
  ellipse(-35/face_size[j]+face_size[j],-65/face_size[j]+face_size[j],70/face_size[j])//眼白
  ellipse(35/face_size[j]+face_size[j],-65/face_size[j]+face_size[j],70/face_size[j])
  stroke("#ef233c")
  fill(255,255,0)
  arc(-55/face_size[j]+face_size[j],-20/face_size[j]+face_size[j],30/face_size[j],30/face_size[j],120,360)//臉頰
  arc(55/face_size[j]+face_size[j],-20/face_size[j]+face_size[j],30/face_size[j],30/face_size[j],200,70)
  stroke(0)
  fill("#00b4d8")//藍色
  ellipse(-35/face_size[j]+face_size[j]+mouseX/300,-65/face_size[j]+face_size[j]+mouseY/300,25/face_size[j])//眼睛虹彩
  ellipse(35/face_size[j]+face_size[j]+mouseX/300,-65/face_size[j]+face_size[j]+mouseY/300,25/face_size[j])
  strokeWeight(0)
  rect(50/face_size[j]+face_size[j],177/face_size[j]+face_size[j],15/face_size[j],3/face_size[j])//襪子藍色線條
  rect(-50/face_size[j]+face_size[j],177/face_size[j]+face_size[j],15/face_size[j],3/face_size[j])
  fill("#ef233c")//紅色
  rect(50/face_size[j]+face_size[j],181/face_size[j]+face_size[j],15/face_size[j],3/face_size[j])//襪子紅色線條
  rect(-50/face_size[j]+face_size[j],181/face_size[j]+face_size[j],15/face_size[j],3/face_size[j])
  ellipse(-60/face_size[j]+face_size[j],-25/face_size[j]+face_size[j],3/face_size[j])//臉頰豆子
  ellipse(-63/face_size[j]+face_size[j],-17/face_size[j]+face_size[j],3/face_size[j])
  ellipse(-53/face_size[j]+face_size[j],-20/face_size[j]+face_size[j],3/face_size[j])
  ellipse(60/face_size[j]+face_size[j],-25/face_size[j]+face_size[j],3/face_size[j])
  ellipse(63/face_size[j]+face_size[j],-17/face_size[j]+face_size[j],3/face_size[j])
  ellipse(53/face_size[j]+face_size[j],-20/face_size[j]+face_size[j],3/face_size[j])
  strokeWeight(2)
  if(mouseIsPressed){//嘴巴
  arc(0/face_size[j]+face_size[j],-14/face_size[j]+face_size[j],100/face_size[j],100/face_size[j],0,180)
  }
  else{
  arc(0/face_size[j]+face_size[j],-14/face_size[j]+face_size[j],100/face_size[j],90/face_size[j],0,180)
  }
  fill(255,255,0)
  arc(0/face_size[j]+face_size[j],-15/face_size[j]+face_size[j],100/face_size[j],37/face_size[j],0,180)
  strokeWeight(2)
  fill("#99582a")//咖啡色
  rect(-50/face_size[j]+face_size[j],130/face_size[j]+face_size[j],30/face_size[j],25/face_size[j])//褲管
  rect(50/face_size[j]+face_size[j],130/face_size[j]+face_size[j],30/face_size[j],25/face_size[j])
  rect(0/face_size[j]+face_size[j],100/face_size[j]+face_size[j],200/face_size[j],50/face_size[j])//咖啡色衣服
  fill(0)//黑色
  ellipse(-35/face_size[j]+face_size[j]+mouseX/300,-65/face_size[j]+face_size[j]+mouseY/300,10/face_size[j])//瞳孔
  ellipse(35/face_size[j]+face_size[j]+mouseX/300,-65/face_size[j]+face_size[j]+mouseY/300,10/face_size[j])
  ellipse(-58/face_size[j]+face_size[j],200/face_size[j]+face_size[j],40/face_size[j],30/face_size[j])//鞋子
  ellipse(58/face_size[j]+face_size[j],200/face_size[j]+face_size[j],40/face_size[j],30/face_size[j])
  rect(70/face_size[j]+face_size[j],100/face_size[j]+face_size[j],35/face_size[j],5/face_size[j])//三個口袋
  rect(0/face_size[j]+face_size[j],100/face_size[j]+face_size[j],35/face_size[j],5/face_size[j])
  rect(-70/face_size[j]+face_size[j],100/face_size[j]+face_size[j],35/face_size[j],5/face_size[j])
  strokeWeight(0.5)
  fill(255)
  rect(-10/face_size[j]+face_size[j],12/face_size[j]+face_size[j],15/face_size[j],15/face_size[j])//門牙
  rect(10/face_size[j]+face_size[j],12/face_size[j]+face_size[j],15/face_size[j],15/face_size[j])
  ellipse(65/face_size[j]+face_size[j],197/face_size[j]+face_size[j],10/face_size[j])//鞋子反光
  ellipse(-65/face_size[j]+face_size[j],197/face_size[j]+face_size[j],10/face_size[j])
  fill("#ef233c")//紅色
  strokeWeight(0)
  triangle(10/face_size[j]+face_size[j],45/face_size[j]+face_size[j],-10/face_size[j]+face_size[j],45/face_size[j]+face_size[j],0/face_size[j]+face_size[j],60/face_size[j]+face_size[j])//領帶
  triangle(0/face_size[j]+face_size[j],58/face_size[j]+face_size[j],-10/face_size[j]+face_size[j],75/face_size[j]+face_size[j],10/face_size[j]+face_size[j],75/face_size[j]+face_size[j])
  triangle(10/face_size[j]+face_size[j],74/face_size[j]+face_size[j],-10/face_size[j]+face_size[j],74/face_size[j]+face_size[j],0/face_size[j]+face_size[j],90/face_size[j]+face_size[j])
  fill(255)//白色
  strokeWeight(2)
  triangle(40/face_size[j]+face_size[j],45/face_size[j]+face_size[j],0/face_size[j]+face_size[j],45/face_size[j]+face_size[j],20/face_size[j]+face_size[j],62/face_size[j]+face_size[j])//襯衫領口
  triangle(-40/face_size[j]+face_size[j],45/face_size[j]+face_size[j],0/face_size[j]+face_size[j],45/face_size[j]+face_size[j],-20/face_size[j]+face_size[j],62/face_size[j]+face_size[j])
  fill("#d6ce93")//土黃色
  strokeWeight(0)
  ellipse(80/face_size[j]+face_size[j],13/face_size[j]+face_size[j],15/face_size[j],20/face_size[j])//坑洞
  ellipse(65/face_size[j]+face_size[j],25/face_size[j]+face_size[j],10/face_size[j],15/face_size[j])
  ellipse(-80/face_size[j]+face_size[j],-100/face_size[j]+face_size[j],15/face_size[j],20/face_size[j])
  ellipse(-82/face_size[j]+face_size[j],-75/face_size[j]+face_size[j],10/face_size[j],15/face_size[j])
  ellipse(80/face_size[j]+face_size[j],-95/face_size[j]+face_size[j],15/face_size[j],20/face_size[j])
  ellipse(-80/face_size[j]+face_size[j],25/face_size[j]+face_size[j],15/face_size[j],20/face_size[j])
  ellipse(-70/face_size[j]+face_size[j],10/face_size[j]+face_size[j],10/face_size[j],15/face_size[j])
  fill(255,255,0)
  strokeWeight(2)
  beginShape()
  curveVertex(17/face_size[j]+face_size[j],-30/face_size[j]+face_size[j])//鼻子
  curveVertex(16/face_size[j]+face_size[j],-31/face_size[j]+face_size[j])
  curveVertex(29/face_size[j]+face_size[j],-29/face_size[j]+face_size[j])
  curveVertex(56/face_size[j]+face_size[j],-21/face_size[j]+face_size[j])
  curveVertex(64/face_size[j]+face_size[j],-22/face_size[j]+face_size[j])
  curveVertex(62/face_size[j]+face_size[j],-31/face_size[j]+face_size[j])
  curveVertex(44/face_size[j]+face_size[j],-38/face_size[j]+face_size[j])
  curveVertex(30/face_size[j]+face_size[j],-41/face_size[j]+face_size[j])
  curveVertex(14/face_size[j]+face_size[j],-41/face_size[j]+face_size[j])
  curveVertex(7/face_size[j]+face_size[j],-37/face_size[j]+face_size[j])
  curveVertex(7/face_size[j]+face_size[j],-30/face_size[j]+face_size[j])
  endShape(close)
  pop() 
}
}
