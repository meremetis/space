
//globals variables
var mainMenuCheck1=false;
var mainMenuCheck2=false;
var mainMenuCheck3=false;
var mainMenuCheck4=false;

var destinationmainMenuCheck1=false;
var destinationmainMenuCheck2=false;
var destinationmainMenuCheck3=false;
var destinationmainMenuCheck4=false;

//elenxos onomatos arxiou html//
window.addEventListener("load", loadsite);
function loadsite()
{
  var path = window. location. pathname;
  var page = path. split("/"). pop();
  if(page=="index.html")
  {
    document.getElementById("link-hr-1").style.visibility = "visible";
    document.getElementById("link-hr-1").style.borderColor = "white";
    mainMenuCheck1=true;
  }
  else if (page=="destination-moon.html")
  {
        document.getElementById("link-hr-2").style.visibility = "visible";
        document.getElementById("link-hr-2").style.borderColor = "white";
        mainMenuCheck2=true;


        //document.body.style.backgroundColor = "red";
        document.body.style.backgroundImage = "url(assets/destination/background-destination-desktop.jpg)";
    //assets/destination/background-destination-desktop.jpg

        document.getElementById("destination-link-hr-1").style.visibility = "visible";
        document.getElementById("destination-link-hr-2").style.visibility = "hidden";
        document.getElementById("destination-link-hr-3").style.visibility = "hidden";
        document.getElementById("destination-link-hr-4").style.visibility = "hidden";

        document.getElementById("destination-ink-item2").addEventListener("mouseover", destinationLinkGreyMouseOver_2);
        document.getElementById("destination-ink-item2").addEventListener("mouseout", destinationLinkGreyMouseOut_2);

        document.getElementById("destination-ink-item3").addEventListener("mouseover", destinationLinkGreyMouseOver_3);
        document.getElementById("destination-ink-item3").addEventListener("mouseout", destinationLinkGreyMouseOut_3);

        document.getElementById("destination-ink-item4").addEventListener("mouseover", destinationLinkGreyMouseOver_4);
        document.getElementById("destination-ink-item4").addEventListener("mouseout", destinationLinkGreyMouseOut_4);



        function destinationLinkGreyMouseOver_2()
        {
            document.getElementById("destination-link-hr-2").style.visibility = "visible";
            document.getElementById("destination-link-hr-2").style.borderColor = "grey";
        }

        function destinationLinkGreyMouseOut_2()
        {
            document.getElementById("destination-link-hr-2").style.visibility = "hidden";
        }

        function destinationLinkGreyMouseOver_3()
        {
            document.getElementById("destination-link-hr-3").style.visibility = "visible";
            document.getElementById("destination-link-hr-3").style.borderColor = "grey";
        }

        function destinationLinkGreyMouseOut_3()
        {
            document.getElementById("destination-link-hr-3").style.visibility = "hidden";
        }

        function destinationLinkGreyMouseOver_4()
        {
            document.getElementById("destination-link-hr-4").style.visibility = "visible";
            document.getElementById("destination-link-hr-4").style.borderColor = "grey";
        }

        function destinationLinkGreyMouseOut_4()
        {
            document.getElementById("destination-link-hr-4").style.visibility = "hidden";
        }

  }
  else if (page=="destination-mars.html")
  {
    document.getElementById("link-hr-2").style.visibility = "visible";
    document.getElementById("link-hr-2").style.borderColor = "white";
    mainMenuCheck2=true;
    //document.body.style.backgroundColor = "red";
    document.body.style.backgroundImage = "url(assets/destination/background-destination-desktop.jpg)";

//assets/destination/background-destination-desktop.jpg

    document.getElementById("destination-link-hr-1").style.visibility = "hidden";
    document.getElementById("destination-link-hr-2").style.visibility = "visible";
    document.getElementById("destination-link-hr-3").style.visibility = "hidden";
    document.getElementById("destination-link-hr-4").style.visibility = "hidden";

    document.getElementById("destination-ink-item1").addEventListener("mouseover", destinationLinkGreyMouseOver_1);
    document.getElementById("destination-ink-item1").addEventListener("mouseout", destinationLinkGreyMouseOut_1);

    document.getElementById("destination-ink-item3").addEventListener("mouseover", destinationLinkGreyMouseOver_3);
    document.getElementById("destination-ink-item3").addEventListener("mouseout", destinationLinkGreyMouseOut_3);

    document.getElementById("destination-ink-item4").addEventListener("mouseover", destinationLinkGreyMouseOver_4);
    document.getElementById("destination-ink-item4").addEventListener("mouseout", destinationLinkGreyMouseOut_4);



    function destinationLinkGreyMouseOver_1()
    {
        document.getElementById("destination-link-hr-1").style.visibility = "visible";
        document.getElementById("destination-link-hr-1").style.borderColor = "grey";
    }

    function destinationLinkGreyMouseOut_1()
    {
        document.getElementById("destination-link-hr-1").style.visibility = "hidden";
    }

    function destinationLinkGreyMouseOver_3()
    {
        document.getElementById("destination-link-hr-3").style.visibility = "visible";
        document.getElementById("destination-link-hr-3").style.borderColor = "grey";
    }

    function destinationLinkGreyMouseOut_3()
    {
        document.getElementById("destination-link-hr-3").style.visibility = "hidden";
    }

    function destinationLinkGreyMouseOver_4()
    {
        document.getElementById("destination-link-hr-4").style.visibility = "visible";
        document.getElementById("destination-link-hr-4").style.borderColor = "grey";
    }

    function destinationLinkGreyMouseOut_4()
    {
        document.getElementById("destination-link-hr-4").style.visibility = "hidden";
    }


  }
  else if (page=="destination-europa.html")
  {
    document.getElementById("link-hr-2").style.visibility = "visible";
    document.getElementById("link-hr-2").style.borderColor = "white";
    mainMenuCheck2=true;
    //document.body.style.backgroundColor = "red";
    document.body.style.backgroundImage = "url(assets/destination/background-destination-desktop.jpg)";
//assets/destination/background-destination-desktop.jpg

      document.getElementById("destination-link-hr-1").style.visibility = "hidden";
      document.getElementById("destination-link-hr-2").style.visibility = "hidden";
      document.getElementById("destination-link-hr-3").style.visibility = "visible";
      document.getElementById("destination-link-hr-4").style.visibility = "hidden";

      document.getElementById("destination-ink-item1").addEventListener("mouseover", destinationLinkGreyMouseOver_1);
      document.getElementById("destination-ink-item1").addEventListener("mouseout", destinationLinkGreyMouseOut_1);

      document.getElementById("destination-ink-item2").addEventListener("mouseover", destinationLinkGreyMouseOver_2);
      document.getElementById("destination-ink-item2").addEventListener("mouseout", destinationLinkGreyMouseOut_2);

      document.getElementById("destination-ink-item4").addEventListener("mouseover", destinationLinkGreyMouseOver_4);
      document.getElementById("destination-ink-item4").addEventListener("mouseout", destinationLinkGreyMouseOut_4);



      function destinationLinkGreyMouseOver_1()
      {
          document.getElementById("destination-link-hr-1").style.visibility = "visible";
          document.getElementById("destination-link-hr-1").style.borderColor = "grey";
      }

      function destinationLinkGreyMouseOut_1()
      {
          document.getElementById("destination-link-hr-1").style.visibility = "hidden";
      }

      function destinationLinkGreyMouseOver_2()
      {
          document.getElementById("destination-link-hr-2").style.visibility = "visible";
          document.getElementById("destination-link-hr-2").style.borderColor = "grey";
      }

      function destinationLinkGreyMouseOut_2()
      {
          document.getElementById("destination-link-hr-2").style.visibility = "hidden";
      }

      function destinationLinkGreyMouseOver_4()
      {
          document.getElementById("destination-link-hr-4").style.visibility = "visible";
          document.getElementById("destination-link-hr-4").style.borderColor = "grey";
      }

      function destinationLinkGreyMouseOut_4()
      {
          document.getElementById("destination-link-hr-4").style.visibility = "hidden";
      }


  }
  else if (page=="destination-titan.html")
  {
    document.getElementById("link-hr-2").style.visibility = "visible";
    document.getElementById("link-hr-2").style.borderColor = "white";
    mainMenuCheck2=true;
    //document.body.style.backgroundColor = "red";
    document.body.style.backgroundImage = "url(assets/destination/background-destination-desktop.jpg)";
//assets/destination/background-destination-desktop.jpg

      document.getElementById("destination-link-hr-1").style.visibility = "hidden";
      document.getElementById("destination-link-hr-2").style.visibility = "hidden";
      document.getElementById("destination-link-hr-3").style.visibility = "hidden";
      document.getElementById("destination-link-hr-4").style.visibility = "visible";

      document.getElementById("destination-ink-item1").addEventListener("mouseover", destinationLinkGreyMouseOver_1);
      document.getElementById("destination-ink-item1").addEventListener("mouseout", destinationLinkGreyMouseOut_1);

      document.getElementById("destination-ink-item2").addEventListener("mouseover", destinationLinkGreyMouseOver_2);
      document.getElementById("destination-ink-item2").addEventListener("mouseout", destinationLinkGreyMouseOut_2);

      document.getElementById("destination-ink-item3").addEventListener("mouseover", destinationLinkGreyMouseOver_3);
      document.getElementById("destination-ink-item3").addEventListener("mouseout", destinationLinkGreyMouseOut_3);



      function destinationLinkGreyMouseOver_1()
      {
          document.getElementById("destination-link-hr-1").style.visibility = "visible";
          document.getElementById("destination-link-hr-1").style.borderColor = "grey";
      }

      function destinationLinkGreyMouseOut_1()
      {
          document.getElementById("destination-link-hr-1").style.visibility = "hidden";
      }

      function destinationLinkGreyMouseOver_2()
      {
          document.getElementById("destination-link-hr-2").style.visibility = "visible";
          document.getElementById("destination-link-hr-2").style.borderColor = "grey";
      }

      function destinationLinkGreyMouseOut_2()
      {
          document.getElementById("destination-link-hr-2").style.visibility = "hidden";
      }

      function destinationLinkGreyMouseOver_3()
      {
          document.getElementById("destination-link-hr-3").style.visibility = "visible";
          document.getElementById("destination-link-hr-3").style.borderColor = "grey";
      }

      function destinationLinkGreyMouseOut_3()
      {
          document.getElementById("destination-link-hr-3").style.visibility = "hidden";
      }

  }
  else if (page=="crew-commander.html"){
    document.getElementById("link-hr-3").style.visibility = "visible";
    document.getElementById("link-hr-3").style.borderColor = "white";
    mainMenuCheck3=true;


    document.body.style.backgroundImage = "url(assets/crew/background-crew-desktop.jpg)";

    document.getElementById("crew-link-1").style.backgroundColor = "white";
    document.getElementById("crew-link-2").style.opacity = "0.1";
    document.getElementById("crew-link-3").style.opacity = "0.1";
    document.getElementById("crew-link-4").style.opacity = "0.1";

    document.getElementById("crew-link-2").addEventListener("mouseover", crewLinkGreyMouseOver_2);
    document.getElementById("crew-link-2").addEventListener("mouseout", crewLinkGreyMouseOut_2);

   document.getElementById("crew-link-3").addEventListener("mouseover", crewLinkGreyMouseOver_3);
    document.getElementById("crew-link-3").addEventListener("mouseout", crewLinkGreyMouseOut_3);

    document.getElementById("crew-link-4").addEventListener("mouseover", crewLinkGreyMouseOver_4);
    document.getElementById("crew-link-4").addEventListener("mouseout", crewLinkGreyMouseOut_4);



    function crewLinkGreyMouseOver_2()
    {
        document.getElementById("crew-link-2").style.opacity = "0.5";
    }

    function crewLinkGreyMouseOut_2()
    {
        document.getElementById("crew-link-2").style.opacity = "0.1";
    }

    function crewLinkGreyMouseOver_3()
    {
        document.getElementById("crew-link-3").style.opacity = "0.5";
    }

    function crewLinkGreyMouseOut_3()
    {
        document.getElementById("crew-link-3").style.opacity = "0.1";
    }

    function crewLinkGreyMouseOver_4()
    {
        document.getElementById("crew-link-4").style.opacity = "0.5";
    }

    function crewLinkGreyMouseOut_4()
    {
        document.getElementById("crew-link-4").style.opacity = "0.1";
    }




  }

  else if (page=="crew-specialist.html"){
    document.getElementById("link-hr-3").style.visibility = "visible";
    document.getElementById("link-hr-3").style.borderColor = "white";
    mainMenuCheck3=true;


    document.body.style.backgroundImage = "url(assets/crew/background-crew-desktop.jpg)";


    document.getElementById("crew-link-1").style.opacity = "0.1";
    document.getElementById("crew-link-2").style.backgroundColor = "white";
    document.getElementById("crew-link-3").style.opacity = "0.1";
    document.getElementById("crew-link-4").style.opacity = "0.1";

    document.getElementById("crew-link-1").addEventListener("mouseover", crewLinkGreyMouseOver_1);
    document.getElementById("crew-link-1").addEventListener("mouseout", crewLinkGreyMouseOut_1);

   document.getElementById("crew-link-3").addEventListener("mouseover", crewLinkGreyMouseOver_3);
    document.getElementById("crew-link-3").addEventListener("mouseout", crewLinkGreyMouseOut_3);

    document.getElementById("crew-link-4").addEventListener("mouseover", crewLinkGreyMouseOver_4);
    document.getElementById("crew-link-4").addEventListener("mouseout", crewLinkGreyMouseOut_4);



    function crewLinkGreyMouseOver_1()
    {
        document.getElementById("crew-link-1").style.opacity = "0.5";
    }

    function crewLinkGreyMouseOut_1()
    {
        document.getElementById("crew-link-1").style.opacity = "0.1";
    }

    function crewLinkGreyMouseOver_3()
    {
        document.getElementById("crew-link-3").style.opacity = "0.5";
    }

    function crewLinkGreyMouseOut_3()
    {
        document.getElementById("crew-link-3").style.opacity = "0.1";
    }

    function crewLinkGreyMouseOver_4()
    {
        document.getElementById("crew-link-4").style.opacity = "0.5";
    }

    function crewLinkGreyMouseOut_4()
    {
        document.getElementById("crew-link-4").style.opacity = "0.1";
    }

  }

  else if (page=="crew-pilot.html"){
    document.getElementById("link-hr-3").style.visibility = "visible";
    document.getElementById("link-hr-3").style.borderColor = "white";
    mainMenuCheck3=true;


    document.body.style.backgroundImage = "url(assets/crew/background-crew-desktop.jpg)";

    document.getElementById("crew-link-1").style.opacity = "0.1";
    document.getElementById("crew-link-2").style.opacity = "0.1";
    document.getElementById("crew-link-3").style.backgroundColor = "white";
    document.getElementById("crew-link-4").style.opacity = "0.1";

    document.getElementById("crew-link-1").addEventListener("mouseover", crewLinkGreyMouseOver_1);
    document.getElementById("crew-link-1").addEventListener("mouseout", crewLinkGreyMouseOut_1);

   document.getElementById("crew-link-2").addEventListener("mouseover", crewLinkGreyMouseOver_2);
    document.getElementById("crew-link-2").addEventListener("mouseout", crewLinkGreyMouseOut_2);

    document.getElementById("crew-link-4").addEventListener("mouseover", crewLinkGreyMouseOver_4);
    document.getElementById("crew-link-4").addEventListener("mouseout", crewLinkGreyMouseOut_4);



    function crewLinkGreyMouseOver_1()
    {
        document.getElementById("crew-link-1").style.opacity = "0.5";
    }

    function crewLinkGreyMouseOut_1()
    {
        document.getElementById("crew-link-1").style.opacity = "0.1";
    }

    function crewLinkGreyMouseOver_2()
    {
        document.getElementById("crew-link-2").style.opacity = "0.5";
    }

    function crewLinkGreyMouseOut_2()
    {
        document.getElementById("crew-link-2").style.opacity = "0.1";
    }

    function crewLinkGreyMouseOver_4()
    {
        document.getElementById("crew-link-4").style.opacity = "0.5";
    }

    function crewLinkGreyMouseOut_4()
    {
        document.getElementById("crew-link-4").style.opacity = "0.1";
    }

  }
  else if (page=="crew-engineer.html"){
    document.getElementById("link-hr-3").style.visibility = "visible";
    document.getElementById("link-hr-3").style.borderColor = "white";
    mainMenuCheck3=true;


    document.body.style.backgroundImage = "url(assets/crew/background-crew-desktop.jpg)";

    document.getElementById("crew-link-1").style.opacity = "0.1";
    document.getElementById("crew-link-2").style.opacity = "0.1";
    document.getElementById("crew-link-3").style.opacity = "0.1";
    document.getElementById("crew-link-4").style.backgroundColor = "white";

    document.getElementById("crew-link-1").addEventListener("mouseover", crewLinkGreyMouseOver_1);
    document.getElementById("crew-link-1").addEventListener("mouseout", crewLinkGreyMouseOut_1);

   document.getElementById("crew-link-2").addEventListener("mouseover", crewLinkGreyMouseOver_2);
    document.getElementById("crew-link-2").addEventListener("mouseout", crewLinkGreyMouseOut_2);

    document.getElementById("crew-link-3").addEventListener("mouseover", crewLinkGreyMouseOver_3);
    document.getElementById("crew-link-3").addEventListener("mouseout", crewLinkGreyMouseOut_3);


    function crewLinkGreyMouseOver_1()
    {
        document.getElementById("crew-link-1").style.opacity = "0.5";
    }

    function crewLinkGreyMouseOut_1()
    {
        document.getElementById("crew-link-1").style.opacity = "0.1";
    }

    function crewLinkGreyMouseOver_2()
    {
        document.getElementById("crew-link-2").style.opacity = "0.5";
    }

    function crewLinkGreyMouseOut_2()
    {
        document.getElementById("crew-link-2").style.opacity = "0.1";
    }

    function crewLinkGreyMouseOver_3()
    {
        document.getElementById("crew-link-3").style.opacity = "0.5";
    }

    function crewLinkGreyMouseOut_3()
    {
        document.getElementById("crew-link-3").style.opacity = "0.1";
    }


  }
  else if (page=="technology-vehicle.html")
  {
        document.getElementById("link-hr-4").style.visibility = "visible";
        document.getElementById("link-hr-4").style.borderColor = "white";
        mainMenuCheck4=true;




      //  document.getElementById("destination-link-hr-1").style.visibility = "hidden";


        document.getElementById("technology-link1").style.backgroundColor = "white";
        document.getElementById("technology-link1").style.color = "black";
        document.getElementById("technology-link2").style.borderColor = "grey";
        document.getElementById("technology-link3").style.borderColor = "grey";


        document.getElementById("technology-link2").addEventListener("mouseover", technologyLinkGreyMouseOver_2);
        document.getElementById("technology-link2").addEventListener("mouseout", technologyLinkGreyMouseOut_2);

        document.getElementById("technology-link3").addEventListener("mouseover", technologyLinkGreyMouseOver_3);
        document.getElementById("technology-link3").addEventListener("mouseout", technologyLinkGreyMouseOut_3);



        function technologyLinkGreyMouseOver_2()
        {
            document.getElementById("technology-link2").style.borderColor = "white";

        }

        function technologyLinkGreyMouseOut_2()
        {
            document.getElementById("technology-link2").style.borderColor = "grey";
        }

        function technologyLinkGreyMouseOver_3()
        {
            document.getElementById("technology-link3").style.borderColor = "white";
        }

        function technologyLinkGreyMouseOut_3()
        {
            document.getElementById("technology-link3").style.borderColor = "grey";
        }


  }
  else if (page=="technology-spaceport.html")
  {
        document.getElementById("link-hr-4").style.visibility = "visible";
        document.getElementById("link-hr-4").style.borderColor = "white";
        mainMenuCheck4=true;




      //  document.getElementById("destination-link-hr-1").style.visibility = "hidden";



        document.getElementById("technology-link1").style.borderColor = "grey";
        document.getElementById("technology-link2").style.backgroundColor = "white";
        document.getElementById("technology-link2").style.color = "black";
        document.getElementById("technology-link3").style.borderColor = "grey";


        document.getElementById("technology-link1").addEventListener("mouseover", technologyLinkGreyMouseOver_1);
        document.getElementById("technology-link1").addEventListener("mouseout", technologyLinkGreyMouseOut_1);

        document.getElementById("technology-link3").addEventListener("mouseover", technologyLinkGreyMouseOver_3);
        document.getElementById("technology-link3").addEventListener("mouseout", technologyLinkGreyMouseOut_3);



        function technologyLinkGreyMouseOver_1()
        {
            document.getElementById("technology-link1").style.borderColor = "white";

        }

        function technologyLinkGreyMouseOut_1()
        {
            document.getElementById("technology-link1").style.borderColor = "grey";
        }

        function technologyLinkGreyMouseOver_3()
        {
            document.getElementById("technology-link3").style.borderColor = "white";
        }

        function technologyLinkGreyMouseOut_3()
        {
            document.getElementById("technology-link3").style.borderColor = "grey";
        }


  }
  else if (page=="technology-capsule.html")
  {
        document.getElementById("link-hr-4").style.visibility = "visible";
        document.getElementById("link-hr-4").style.borderColor = "white";
        mainMenuCheck4=true;




      //  document.getElementById("destination-link-hr-1").style.visibility = "hidden";



        document.getElementById("technology-link1").style.borderColor = "grey";
        document.getElementById("technology-link2").style.borderColor = "grey";
        document.getElementById("technology-link3").style.backgroundColor = "white";
        document.getElementById("technology-link3").style.color = "black";

        document.getElementById("technology-link1").addEventListener("mouseover", technologyLinkGreyMouseOver_1);
        document.getElementById("technology-link1").addEventListener("mouseout", technologyLinkGreyMouseOut_1);

        document.getElementById("technology-link2").addEventListener("mouseover", technologyLinkGreyMouseOver_2);
        document.getElementById("technology-link2").addEventListener("mouseout", technologyLinkGreyMouseOut_2);



        function technologyLinkGreyMouseOver_1()
        {
            document.getElementById("technology-link1").style.borderColor = "white";

        }

        function technologyLinkGreyMouseOut_1()
        {
            document.getElementById("technology-link1").style.borderColor = "grey";
        }

        function technologyLinkGreyMouseOver_2()
        {
            document.getElementById("technology-link2").style.borderColor = "white";
        }

        function technologyLinkGreyMouseOut_2()
        {
            document.getElementById("technology-link2").style.borderColor = "grey";
        }


  }

}
//alert(page);//ELENXOS ONOMATOS



//link-1-//

document.getElementById("link-item1").addEventListener("mouseover", linkGreyMouseOver_1);
document.getElementById("link-item1").addEventListener("mouseout", linkWhiteMouseOut_1);
document.getElementById("link-item1").addEventListener("click", clickLink1);

function linkGreyMouseOver_1()
{
  if(mainMenuCheck1==true)
  {
    document.getElementById("link-hr-1").style.visibility = "visible";
    document.getElementById("link-hr-1").style.borderColor = "white";
  }
  else
  {
    document.getElementById("link-hr-1").style.visibility = "visible";
    document.getElementById("link-hr-1").style.borderColor = "grey";
  }
}

function clickLink1() {
  document.getElementById("link-hr-1").style.visibility = "visible";
  document.getElementById("link-hr-1").style.borderColor = "white";
  document.getElementById("link-hr-2").style.visibility = "hidden";
  document.getElementById("link-hr-3").style.visibility = "hidden";
  document.getElementById("link-hr-4").style.visibility = "hidden";
  mainMenuCheck1=true;
  mainMenuCheck2=false;
  mainMenuCheck3=false;
  mainMenuCheck4=false;
}

function linkWhiteMouseOut_1()
{
  if(mainMenuCheck1==true)
  {
    document.getElementById("link-hr-1").style.visibility = "visible";
    document.getElementById("link-hr-1").style.borderColor = "white";
  }
  else
  {
    document.getElementById("link-hr-1").style.visibility = "hidden";
    document.getElementById("link-hr-1").style.borderColor = "white";
  }
}


//end-link-1-//
//------//

//link-2-//

document.getElementById("link-item2").addEventListener("mouseover", linkGreyMouseOver_2);
document.getElementById("link-item2").addEventListener("mouseout", linkWhiteMouseOut_2);
document.getElementById("link-item2").addEventListener("click", clickLink2);

function linkGreyMouseOver_2()
{
  if(mainMenuCheck2==true)
  {
    document.getElementById("link-hr-2").style.visibility = "visible";
    document.getElementById("link-hr-2").style.borderColor = "white";
  }
  else
  {
    document.getElementById("link-hr-2").style.visibility = "visible";
    document.getElementById("link-hr-2").style.borderColor = "grey";
  }
}

function clickLink2()
{
  document.getElementById("link-hr-2").style.visibility = "visible";
  document.getElementById("link-hr-2").style.borderColor = "white";
  document.getElementById("link-hr-1").style.visibility = "hidden";
  document.getElementById("link-hr-3").style.visibility = "hidden";
  document.getElementById("link-hr-4").style.visibility = "hidden";
  mainMenuCheck2=true;
  mainMenuCheck1=false;
  mainMenuCheck3=false;
  mainMenuCheck4=false;

}

function linkWhiteMouseOut_2()
{
  if(mainMenuCheck2==true)
  {
    document.getElementById("link-hr-2").style.visibility = "visible";
    document.getElementById("link-hr-2").style.borderColor = "white";
  }
  else
  {
    document.getElementById("link-hr-2").style.visibility = "hidden";
    document.getElementById("link-hr-2").style.borderColor = "white";
  }
}
//end-link-2-//
//------//

//link-3-//
document.getElementById("link-item3").addEventListener("mouseover", linkGreyMouseOver_3);
document.getElementById("link-item3").addEventListener("mouseout", linkWhiteMouseOut_3);
document.getElementById("link-item3").addEventListener("click", clickLink3);

function linkGreyMouseOver_3()
{
  if(mainMenuCheck3==true)
  {
    document.getElementById("link-hr-3").style.visibility = "visible";
    document.getElementById("link-hr-3").style.borderColor = "white";
  }
  else
  {
    document.getElementById("link-hr-3").style.visibility = "visible";
    document.getElementById("link-hr-3").style.borderColor = "grey";
  }
}

function clickLink3()
{
  document.getElementById("link-hr-3").style.visibility = "visible";
  document.getElementById("link-hr-3").style.borderColor = "white";
  document.getElementById("link-hr-1").style.visibility = "hidden";
  document.getElementById("link-hr-2").style.visibility = "hidden";
  document.getElementById("link-hr-4").style.visibility = "hidden";
  mainMenuCheck3=true;
  mainMenuCheck1=false;
  mainMenuCheck2=false;
  mainMenuCheck4=false;
}

function linkWhiteMouseOut_3()
{
  if(mainMenuCheck3==true)
  {
    document.getElementById("link-hr-3").style.visibility = "visible";
    document.getElementById("link-hr-3").style.borderColor = "white";
  }
  else
  {
    document.getElementById("link-hr-3").style.visibility = "hidden";
    document.getElementById("link-hr-3").style.borderColor = "white";
  }
}
//end-link-3-//
//------//

//link-4-//
document.getElementById("link-item4").addEventListener("mouseover", linkGreyMouseOver_4);
document.getElementById("link-item4").addEventListener("mouseout", linkWhiteMouseOut_4);
document.getElementById("link-item4").addEventListener("click", clickLink4);

function linkGreyMouseOver_4()
{
  if(mainMenuCheck4==true)
  {
    document.getElementById("link-hr-4").style.visibility = "visible";
    document.getElementById("link-hr-4").style.borderColor = "white";
  }
  else
  {
    document.getElementById("link-hr-4").style.visibility = "visible";
    document.getElementById("link-hr-4").style.borderColor = "grey";
  }
}

function clickLink4()
{
  document.getElementById("link-hr-4").style.visibility = "visible";
  document.getElementById("link-hr-4").style.borderColor = "white";
  document.getElementById("link-hr-1").style.visibility = "hidden";
  document.getElementById("link-hr-2").style.visibility = "hidden";
  document.getElementById("link-hr-3").style.visibility = "hidden";
  mainMenuCheck4=true;
  mainMenuCheck1=false;
  mainMenuCheck2=false;
  mainMenuCheck3=false;
}

function linkWhiteMouseOut_4()
{
  if(mainMenuCheck4==true)
  {
    document.getElementById("link-hr-4").style.visibility = "visible";
    document.getElementById("link-hr-4").style.borderColor = "white";
  }
  else
  {
    document.getElementById("link-hr-4").style.visibility = "hidden";
    document.getElementById("link-hr-4").style.borderColor = "white";
  }
}
//end-link-4-//
//------//
  document.getElementById("burger-menu-open").addEventListener("click", openMenu);
  document.getElementById("burger-menu-close").addEventListener("click", closeMenu);
function openMenu(){
  document.getElementById("index-menu").style.display = "flex";
  document.getElementById("index-menu").style.height = window.innerHeight+"px";
}
function closeMenu(){
  document.getElementById("index-menu").style.display = "none";
}
