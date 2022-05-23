    function  podeSubir(altura, vemAcompanhado ){
        
        if (altura >= 1.40 && altura < 2.00 ){
            return "Permissão autorizada"  
        }else if (altura < 1.20 &&  Altura < 1.40 && vemAcompanhado ){
            return "Permissão autorida com acompanhante" 
        }else{
            return "permissão negada";  
        }
    }   
    console.log( podeSubir(1.0, true) );
        
        
        
    
