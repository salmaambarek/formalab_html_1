calc_array = new Array();
var calcul=0;
var pas_ch=0;



function add_calc(id,n)
{
        if(calc_array[id][1]==1)
        {
                $id(id+'_resultat').value=n;
        }
        else
        {
                $id(id+'_resultat').value+=n;
        }
        if(calc_array[id][0]=='=')
        {
                calc_array[id][2] = $id(id+'_resultat').value;
                calc_array[id][3] = 0;
        }
        else
        {
                calc_array[id][3] = $id(id+'_resultat').value;
        }
        calc_array[id][1] = 0;
        document.getElementById(id+'_resultat').focus();
        return true;
}