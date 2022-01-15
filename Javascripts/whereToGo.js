
function display(){
    var valueSelected = '';
    var valueSelected = document.getElementById("province-select").value;
    var westernProvince = document.getElementById("western");
    var centralProvince = document.getElementById("central");
    var southernProvince = document.getElementById("southern");
    var easternProvince = document.getElementById("eastern");
    var northernProvince = document.getElementById("northern");
    var uvaProvince = document.getElementById("uva");
    var sabaragamuwaProvince = document.getElementById("sabaragamuwa");
    var northWesternProvince = document.getElementById("north-western");
    var northCentralProvince = document.getElementById('north-central');



    /* showing the provinces when selected */
    if(valueSelected === "Western Province"){


        if(westernProvince.style.display = "none"){
            westernProvince.style.display = "block";
        } 

    }

    if(valueSelected === "Central Province"){

        if(centralProvince.style.display = "none"){
            centralProvince.style.display = "block";
        }

    }

    if(valueSelected === "Southern Province"){

        if(southernProvince.style.display = "none"){
            southernProvince.style.display = "block";
        }
        
    } 

    if(valueSelected === "Eastern Province"){

        if(easternProvince.style.display = "none"){
            easternProvince.style.display = "block";
        }
        
    } 

    if(valueSelected === "Northern Province"){

        if(northernProvince.style.display = "none"){
            northernProvince.style.display = "block";
        }
        
    } 

    if(valueSelected === "Uva Province"){

        if(uvaProvince.style.display = "none"){
            uvaProvince.style.display = "block";
        }
        
    } 

    
    if(valueSelected === "Sabaragamuwa Province"){

        if(sabaragamuwaProvince.style.display = "none"){
            sabaragamuwaProvince.style.display = "block";
        }
        
    } 

    if(valueSelected === "North-Western Province"){

        if(northWesternProvince.style.display = "none"){
            northWesternProvince.style.display = "block";
        }
        
    } 

    if(valueSelected === "North-Central Province"){

        if(northCentralProvince.style.display = "none"){
            northCentralProvince.style.display = "block";
        }
        
    } 


    /* hiding the province when another province is selected */


    if(valueSelected != "Western Province"){
        westernProvince .style.display = 'none';
    }

    if(valueSelected != "Central Province"){
        centralProvince.style.display = 'none';
    }

    if(valueSelected != "Southern Province"){
        southernProvince.style.display = 'none';
    }

    if(valueSelected != "Eastern Province"){
        easternProvince.style.display = 'none';
    }
    
    if(valueSelected != "Northern Province"){
        northernProvince.style.display = 'none';
    }

    if(valueSelected != "Uva Province"){
        uvaProvince.style.display = 'none';
    }

    if(valueSelected != "Sabaragamuwa Province"){
        sabaragamuwaProvince.style.display = 'none';
    }

    if(valueSelected != "North-Western Province"){
        northWesternProvince.style.display = 'none';
    }

    
    if(valueSelected != "North-Central Province"){
        northCentralProvince.style.display = 'none';
    }




    
}


