---
title: start
date: 2020-11-13T07:37:09.000+01:00

---
<head>

<meta charset="utf-8">

<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">

<title>{{ if not .IsHome }}{{ with .Title }}{{ . }} | {{ end }}{{ end }}{{ .Site.Title }}</title>

<meta name="description" content="{{ with .Description }}{{ . }}{{ else }}{{ with .Summary }}{{ . }}{{ else }}{{ .Site.Params.description }}{{end }}{{ end }}">

<link rel="canonical" href="{{ .Permalink }}" />

<link rel="stylesheet" href="[https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.4/css/bulma.min.css](https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.4/css/bulma.min.css "https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.4/css/bulma.min.css")">

<link rel="stylesheet" href='{{ absURL "css/bulma.min.css" }}'>

<link rel="stylesheet" href='{{ "css/style.css" | relURL }}'/>

  
 <link rel="stylesheet" href="[https://use.fontawesome.com/releases/v5.7.2/css/all.css](https://use.fontawesome.com/releases/v5.7.2/css/all.css "https://use.fontawesome.com/releases/v5.7.2/css/all.css")" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous"> <script src="[https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js](https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js "https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js")"></script> <link rel="stylesheet" href="[https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css](https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css "https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css")" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous"> {{ template "_internal/opengraph.html" . }} {{ template "_internal/twitter_cards.html" . }} {{ if not (in (string .Site.BaseURL) "localhost") }} {{ template "_internal/google_analytics_async.html" . }} {{ end }} {{ with .Params.forestry_instant_preview_id }} {{- safeHTML (printf "<meta property='forestry_instant_preview_id' content='%s'>" .) -}}{{ end -}}
</head>
<header>
    <div class="firstline">
        <ul class="nav">
            <li class="nav-item">
                <a class="nav-link" href="#"><i class="fas fa-search"></i></a>
              </li>
            <li class="nav-item">
              <button class="button1" ><a class="nav-link" href="#">Brochures</a></button>
            </li>
            <li class="nav-item">
              <button class="button2"><a class="nav-link" href="#">Entretiens pédagogiques</a></button>
            </li>
            
          </ul>
    </div>
    
    <div class='logo'>
        <img src="/../img/logo.png" alt="logo NWS" />
    </div>
    <nav class="navbar" role="navigation">
        <div class="container">
            <div class="navbar-brand">
                <a href="/" title="home" class="navbar-item">
                    <span class="logo"><!----<h1>{{ .Site.Title }}</h1>-----></span>
                </a>
                
                <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
            <div class="navbar-menu">
                <div class="navbar-start">
                    {{ range .Site.Menus.main }}
                    <a href="{{ .URL }}" class="navbar-item">{{ .Name }}</a>
                    {{ end }}
                </div>
                
            </div>
        </div>
    </nav>
    <script>
        $(document).ready(function () {
            $(".navbar-burger").click(function () {
                $(".navbar-burger").toggleClass("is-active");
                $(".navbar-menu").toggleClass("is-active");
            })
        })
    </script>
   
</header>
<div class="container">
    
    <div class="section">
        <div class='wallpaper'>
            <img src="img/wall.png" alt="wallpaper NWS" />
        </div>
        <div class="content">
 <!------------------------------------------------------------------------------------------------------->  

            <div class="sectionprojet">
                <h2 class="white">Que font les étudiants au sein de notre école?</h2>
                <p style= color:#00a5a5>Voici la globalité des projets conceptionner par nos étudiants </p>
                <h3 style= color:#fec800 >Les plus récents</h3>
            <div id="myCarousel" class="carousel slide">
                    <div class="carousel-inner">
                        <div class="carousel">
                            <div class="item active">
                                <div class="row">
                                    <div class="col-sm-4">
                                        <img class="d-block w-10" src="img/imgprojet.png" alt="First slide">
                                    </div>
                                    <div class="col-sm-4">
                                        {{- block "My First Post" . }}{{- end }}
                                       
                                        <img class="d-block w-10" src="img/abeille.png" alt="First slide">
                                    </div>
                                    <div class="col-sm-4">
                                        <img class="d-block w-10" src="img/juice.png" alt="First slide">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
         </div>
    <!------------------------------------------------------------------------------------------------------->    

    <div class="content2">
        <div class="sectionprojet">
        <h3 style= color:#e94a34>Cet année</h3>
            <div id="myCarousel" class="carousel slide">
                <div class="carousel-inner">
                    <div class="carousel">
                        <div class="item active">
                            <div class="row">
                                <div class="col-sm-4">
                                    <img class="d-block w-10" src="img/social.png" alt="First slide">
                                </div>
                                <div class="col-sm-4">
                                    <img class="d-block w-10" src="img/work.png" alt="First slide">
                                </div>
                                <div class="col-sm-4">
                                    <img class="d-block w-10" src="img/phone.png" alt="First slide">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
 <!------------------------------------------------------------------------------------------------------->  

<div class="content">
    <div class="sectionprojet">
    <h3 style= color:#fec800 >Projets de 2018 à 2019</h3>
    <div id="myCarousel" class="carousel slide">
        <div class="carousel-inner">
            <div class="carousel">
                <div class="item active">
                    <div class="row">
                        <div class="col-sm-4">
                            <img class="d-block w-10" src="img/imgprojet.png" alt="First slide">
                        </div>
                        <div class="col-sm-4">
                            <img class="d-block w-10" src="img/abeille.png" alt="First slide">
                        </div>
                        <div class="col-sm-4">
                            <img class="d-block w-10" src="img/juice.png" alt="First slide">
                         </div>
                         
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="content2">
    <div class="sectionprojetsuite">
        <div class="carousel">
            <h4>Vous voulez en découvrir davantage?</h4>
            <button class="button3" ><a href="#">Voir tous les projets<i class="fas fa-arrow-circle-right"></i></a></button>           
        </div>     
    </div>
    <div class="sectionprojetsuite">
        <div class="carousel">
            <img src="img/tirets.png" alt="tiret NWS" />   
            <h4>Nos partenaires:</h4>
            <img src="img/partenaire.png" alt="partenaire NWS" />          
        </div>     
    </div>
</div> 
</div>

 <!------------------------------------------------------------------------------------------------------->
<footer class="footer">
    <div class="containerfooter">
       <div class="photo1"><img src="/../img/logofooter.png" alt="wallpaper NWS" /></div>
       <div class="contact">
            <ul >
                <li><h3 class="titlefooter" style= color:#00a5a5>Nous retrouver</h3></li>
                <li style= color:#fec800 >Seine Innopolis</li>
                <li style= color:grey>72 rue de la République</li>
                <li style= color:grey>76140 Le Petit-Quevilly</li>
                
            </ul>
       </div>
       <div class="contact">
        <ul >
            <li><h3 class="titlefooter" style= color:#00a5a5>Nous contacter</h3></li>
            <li style= color:#fec800 >Par mail</li>
            <li style= color:grey>contact@normandiewebschool.fr</li>
            <li style= color:#fec800 >Par téléphone</li>
            <li style= color:grey>02 79 02 73 78</li>
            
            
            
        </ul>
   </div>
   <div class="contact">
    <ul >
        <li><h3  class="titlefooter" style= color:#00a5a5>Réseaux sociaux</h3></li>
        <div class="navbar-end">
            {{ range .Site.Menus.social }}
            <a href="{{ .URL }}" class="navbar-item is-hidden-touch" title="{{ .Name }}"><span
                    class="icon">{{ .Pre }}</span></a>
            {{ end }}
        </div>
    </ul>
</div>
       
    </div>
    <div class="footerline"></div>
    <div class="copyright">
        <p><span class="white">L'école vous intéresse-t-elle? </span><span class="red">prendre rendez vous pour un entretiens</span></p>
    </div>
        <div class="footerline"></div>
    </div>
    <div class="lastcontainerfooter">
       
        <div class="contact">
             <ul >
                 <li>Mentions légales</li>
                
                 
             </ul>
        </div>
        <div class="contact">
         <ul >
             <li>Contact</li>
             
             
             
         </ul>
    </div>
    <div class="contact">
     <ul >
         <li>Confidentialité</li>
         
     </ul>
 </div>
 
   <!--------<div class="copyright">© 2019 NORMANDIE WEB SCHOOL</div>-------->
</footer>