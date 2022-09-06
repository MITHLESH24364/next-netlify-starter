<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Final Project</title>
    <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
     />
    <style>
       *{
           margin: 0%;
           padding: 0%;
       }
       body{
           font-family: sans-serif;
       }
        a{
            text-decoration: none;
            color: cornsilk;
        }
        .contaner{
            display: inline;
            width: 100%;
            margin: auto;
            background-color: black;
            position: fixed;
            top: 0;
            z-index: 3;
            
        }
        .logo{
             width: 10%;
            height: 80%;
            float: left;
            padding: 5px;
        }
        .logo-img{
            border-radius: 50%;
        }
        .contant{
            background-color: rgb(19, 18, 18);
            text-align: center;
            padding: 10px;
            color: rgb(3, 3, 3);
            height: 45px;
        }
        ul{
            list-style: none;
            text-align: center;
            margin-top: 10px;
        }
        li{
            display: inline;
            padding: 95px;
            font-size: 22px;
        }
        .contaner1{
            text-align: center;
            color: blanchedalmond;
            background-color: black;
            padding: 15px;
            font-size: 20px;
            margin-top: 0px;
            position: relative;
            top: 64px;
        }
        .contaner2{
            height: 150vh;
        }
        .contaner3{
            width: 100%;
            background-color: black;
            height: 700px;
        }
        .contaner4{
            background-color:black;
            margin: auto;
            width: 80%;
            padding: 5%;
        }
        .name{
            color:white;
            text-align: left;    
        }
        p{
            font-size: 20px;
        }
        .box{
            width: 100%;
            background-color: white;
        }
        .box2{
            width: 95%;
            height: 28px;
            background-color: gray;    
        }
        .box3{
            width: 40%;
            height: 28px;
            background-color: gray;    
        }
        .box4{
            width: 70%;
            height: 28px;
            background-color: gray;    
        }
        .contaner5{
            width: 100%;
            height: 100px;
            margin: auto;
            float: left; 
            background-color: aliceblue; 
        }
        .box5{
            width: 20%;
            height: 75px;
            float: left;
            margin: 5px;
            padding: 15px;
            font-size: 30px;
            text-align: center;
        }
        .contaner6{
            width: 80%; 
            margin: auto;
        }
        .download{
            width: 200px;
            height: 20px;
            background-color: white;
            padding: 15px;
            float: left;
            display: inline;
            color: black;
        }
        .p1{
            font-size: 20px;
            float: right;
        }
        .contaner7{
            background-color: black;
            width: 100%;
            height: 500px;
            margin-bottom: 20px;
        }
       .contaner8{
           width: 80%;
           color: white;
           margin: auto;
       }
       .contaner9{
           background-color:black;
           height: 400px;
           width: 80%;
           margin: auto;
           margin-bottom: 60px;
       }
       .contaner10{
            width: 48%;
            height: 95%;
            float: left;
            margin: 7px;
            font-size: 30px;
            text-align: center;
            background-color: white;
       }
       
        button{
            background-color:white;
            color:black;
            padding: 10px;
            border: none;
        } 
        .li-heading{
            padding: 20px;
            font-size: 30px;
            background-color: #111111;
            color: white;
        }   
        .li-sub{
            padding: 12px;
            display: block;
            border-bottom: 1px solid gray;
            font-size: 14px;
        }
        .sign-up{
            margin-top: 25px;
            padding:7px 15px;
        }
        .button-contaner{
            background-color: rgb(201, 197, 197);
            height: 75px;
        }
        .dollor{
            padding: 25px;
        }
        .contaner11{
            padding: 0%;
            margin: auto;
            background-color: black;
            width: 100%;
            height: 2800px;
        }
        .contaner12{
            width: 80%;  
            color: white;
            margin: auto;
            font-size: 20px;
        }
        .contaner13{
            margin-left: 7px;
            margin: auto;
           display: inline;
           background-color:black;
        }
        .photo-box{
            width: 49%;
            float: left;
            margin: 5px;
        }
        .contaner14{
            height: 100px;  
        }
        .contaner15{
            width: 80%;
            color: white;
            margin: auto;
            padding: 0%;
            background-color: black;
            margin-top: 10px;
        }
        .img-logo{
            border-radius: 50%;
            padding: 10px;
        }
        .contaner16{
            width: 100%;
            background-color: black;
            color:white;
            float: left;
            margin-bottom: 10px;
        }
        .contaner17{
            width: 100%;
            background-color: black;
        }
        .contaner18{
            width: 80%;
            margin: auto;
            color:white;
            height: 500px;
        }
        .box-m{
            width: 220px;
            height: 30px;
            background-color:black;
            margin: 15px;
            font-size: 30px;
        }
        .download2{
            width: 200px;
            height: 20px;
            padding: 10px;
            float: left;
            display: inline;
        }
        .p2{
            font-size: 15px;
            float: right;
        }  
        table{
            margin-top: 50px;
        } 
        input{
            padding: 10px;
            width: 700px;
            height: 20px;
        }
        .contaner66{
            width: 80%; 
            margin: auto;
            background-color: black;
            height: 200px;
        }
        .download1{
            width: 200px;
            height: 20px;
            background-color: white;
            padding: 15px;
            float: left;
            display: inline;
            color: black;
        }
        .contaner77{
            width: 100%;
            background-color: black;
            height: 100px;
        }
        .contaner78{
            width: 80%;
            margin: auto;
            color: white;
        }
        .contaner-last{
            color: white;
            font-size: 30px;
        }
        .black-box{
            width: 100%;
            height: 100px;
            background-color: black;
        }
        .black-box1{
            width: 100%;
            height: 200px;
            background-color: black;
        }
    </style>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</head>
<body>
    <a id="home"></a>
    <div class="contaner" >
        <div class="logo" >
            <img src="IMG_20210317_015232_085.jpg" width="100px" height="50pxpx" class="logo-img">
        </div>
        <div class="contant" >
            <ul>
                <li><a href="#home">HOME</a></li>
                <li><a href="#about">ABOUT</a></li>
                <li><a href="#Photos">PHOTOS</a></li>
                <li><a href="#Contact">CONTACT</a></li>
            </ul>
        </div>
    </div>
    <div class="contaner1">
        <h1 class="animate__animated animate__bounce">I'm Mithlesh Singh.</h1><br>
        <h5>Photographer and Web Designer.</h5>
    </div>
    <div class="contaner2">
        <img src="IMG_20210317_015232_085.jpg" width="100%" height="100%" style="object-fit: cover;">
    </div>
    <a id="about"></a>
    <div class="contaner3">
        <div class="contaner4">
            <div class="name">
                <h2>My Name</h2><br><br>
                <p>Some text about me. My name is Mithlesh Kumar Singh. I am a Photographer. I like taking pictures of nature. Nature photography is a wide range of photography taken outdoors and devoted to displaying natural elements such as landscapes, wildlife, plants, and close-ups of natural scenes and textures.</p><br><br>
                <h3>My Skills</h3><br>
                <p>Photography</p>
                <div class="box">
                    <div class="box2">
                    </div>
                </div>
                <p>Web Design</p>
                <div class="box">
                    <div class="box3">
                    </div>
                </div>
                <p>Photoshop</p>
                <div class="box">
                    <div class="box4">
                    </div>
                </div>
            </div><br><br>
            <div class="contaner5">
                <div class="box5">
                    <h5>11+</h5>
                    <p>Partners</p>
                </div>
                <div class="box5">
                    <h5>55+</h5>
                    <p>Projects Done</p>
                </div>
                <div class="box5">
                    <h5>89+</h5>
                    <p>Happy Clients</p>
                </div>
                <div class="box5">
                    <h5>150+</h5>
                    <p>Meetings</p>
                </div>
            </div>    
        </div><br><br>
        <div class="contaner6">
            <div class="download">
                <i class="fa fa-download"></i> 
                <p class="p1">Download Resume</p> 
            </div>
        </div>    
    </div>
    <div class="contaner7">
        <div class="contaner8">
            <H2>My Price</H2>
        </div> 
        <div class="contaner9">
            <div class="contaner10">
                <h2 class="li-heading">Basic</h2>
               <ul class="basic-contaner">
                   <li class="li-sub animate__bounceInDown">Web Design</li>
                   <li class="li-sub">Photography</li>
                   <li class="li-sub">5GB Storage</li>
                   <li class="li-sub">Mail Support</li>
                   <li class="li-sub dollor">$ 10
                    per month</li>
               </ul>
               <div class="button-contaner">
               <button class="sign-up">Sign Up</button>
               </div>
            </div>  
            <div class="contaner10">
                <h2 class="li-heading">Pro</h2>
               <ul class="basic-contaner">
                   <li class="li-sub">Web Design</li>
                   <li class="li-sub">Photography</li>
                   <li class="li-sub">50GB Storage</li>
                   <li class="li-sub">Endless Support</li>
                   <li class="li-sub dollor">$ 25
                    per month</li>
               </ul>
               <div class="button-contaner">
               <button class="sign-up">Sign In</button>
               </div>
            </div>  
        </div>    
        <div class="contaner15">
            <div class="contaner16">
                <h2 style="padding: 10px;">Refrance</h2>
                <div class="img-logo">
                    <img src="IMG_2569_2-01.jpeg" width="80px" height="80px" class="img-logo" style="float: left;">
                    <p style="float: left; padding: 27px;">Biraj Cheetri <br> Principal of Ideal Model School</p>
                </div> 
            </div>
    </div>    
    <div class="black-box1">
    
    </div>
    <a id="Photos"></a>
    <div class="contaner11">
        <div class="contaner12">
            <div class="contaner14"> 
            </div> 
            <a id="Photos"></a>  
            <div class="contaner13">
                <h2>Photos</h2>
                <div class="photo-box">
                   <img src="IMG_20210407_101404.jpg" style="width: 100%;">
                   <img src="IMG_9344-01-01.jpeg" style="width: 100%;">
                   <img src="20200320153129_IMG_9213.jpg" style="width: 100%;">
                   <img src="20200324180958_IMG_9386-EFFECTS (1)-01.jpeg" style="width: 100%; height: 705px">
                   <img src="20191204065749_IMG_4489.jpg" style="width: 100%;">
                </div>
                <div class="photo-box">
                    <img src="PSX_20190810_230520.jpg" style="width: 100%;">
                    <img src="IMG_9170.jpg" style="width: 100%;">
                    <img src="IMG_4751.jpg" style="width: 100%; height: 700px;">
                    <img src="IMG_9181.jpg" style="width: 100%;">
                    <img src="mks.jpeg" style="width: 100%;">
                    <img src="PSX_20190808_234620.jpg" style="width: 100%;">
                </div>
            </div>  
        </div>
        
    </div>  
    <a id="Contact"></a> 
    <div class="black-box">

    </div> 
    <div class="contaner17">
        <div class="contaner18">
            <h2 style="font-size: 30px;">Contact Me</h2><br>
            <div class="contaner19">
                <div class="box-m">
                    <div class="download2">
                        <i class="fa fa-map-marker"></i>
                        <p class="p2">Lalitpur, Nepal</p>
                    </div>
                </div>
                <div class="box-m">
                    <div class="download2">
                        <i class="fa fa-phone"></i>
                        <p class="p2">+977-98176222227</p>
                    </div>
                </div>
                <div class="box-m">
                    <div class="download2">
                        <i class="fa fa-envelope"></i>
                        <p class="p2">Email: mail@mail.com</p>
                    </div>
                </div>
            </div><br>
            <div class="contactus">
                <p>Let's get in touch. Send me a message:</p>
                <div class="name">
                    <table>
                        <tr>
                            <td><label for="fname"></label></td>
                            <td><input type="text" id="fname" placeholder="Name"></td>
                        </tr>
                        <tr>
                            <td><label for="fname"></label></td>
                            <td><input type="text" id="fname" placeholder="Email"></td>
                        </tr>
                        <tr>
                            <td><label for="fname"></label></td>
                            <td><input type="text" id="fname" placeholder="Subject"></td>
                        </tr>
                        <tr>
                            <td><label for="fname"></label></td>
                            <td><input type="text" id="fname" placeholder="Message"></td>
                        </tr>
                    </table>
                </div>   
            </div> 
        </div>
        <div class="contaner66">
            <div class="download1">
                <i class="fa fa-paper-plane"></i> 
                <p class="p1">SEND MESSAGE</p> 
            </div>
        </div>
    </div> 
    <div class="contaner77">
        <div class="contaner78">
            <div class="contaner-last">
                <i class="fa fa-facebook"></i>
                <i class="fa fa-instagram"></i>
                <i class="fa fa-snapchat"></i>
                <i class="fa fa-pinterest"></i>
                <i class="fa fa-twitter"></i>
                <i class="fa fa-linkedin"></i>
            </div><br>
            <p>Powered by MKS</p>
        </div>
    </div>          
</body>
</html>
