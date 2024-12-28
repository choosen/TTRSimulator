var x_longeur = 0;
var x_points = 0;
var x_liens = 0;
var rail_lst = new Array();
var rail_nbr = 78;
var image_nbr = -1; // nombre d'images charg�es

f_init_rail();

function f_ajout_lien(id, lng) {

  var rail_obj = document.getElementById('rail_' + id);
  if (rail_obj.style.visibility == 'visible') {
    rail_obj.style.visibility = 'hidden';
    rail_lst[id] = false;
    f_info_actu(lng, -1);
  } else {
    rail_obj.style.visibility = 'visible';
    rail_lst[id] = true;
    f_info_actu(lng, +1);
  }

}

function f_actualise_tout(vis) {
  if (vis) {
    /* fonctionne mais ne calcule pas les points !
    // Tout visible
    for (var id in rail_lst) {
      if (!rail_lst[id]) {
        document.getElementById('rail_'+id).style.visibility = 'visible';
        rail_lst[id] = true;
      }
    }
    */
    window.alert('Impossible pour l\'instant.');
  } else {
    // Tout invisible
    for (var id in rail_lst) {
      if (rail_lst[id]) {
        document.getElementById('rail_' + id).style.visibility = 'hidden';
        rail_lst[id] = false;
      }
    }
    f_info_actu(0, 0);
  }
}

function f_info_actu(lng, sig) {
  if (sig == 0) {
    // Intitialisation
    x_longeur = 0;
    x_points = 0;
    x_liens = 0;
  } else {
    // Incr�ment
    x_longeur = x_longeur + sig * lng;
    x_points = x_points + sig * f_donne_points(lng);
    x_liens = x_liens + sig;
  }
  document.getElementById('txt_longueur').value = x_longeur;
  document.getElementById('txt_points').value = x_points;
  document.getElementById('txt_liens').value = x_liens;
}

function f_donne_points(lng) {
  if (lng == 1) return 1;
  if (lng == 2) return 2;
  if (lng == 3) return 4;
  if (lng == 4) return 7;
  if (lng == 5) return 10;
  if (lng == 6) return 15;
  return 0;
}

function f_init_rail() {
  var i = 0;
  var id = '';
  for (i = 1; i <= rail_nbr; i++) {
    // Formatage de l'id
    id = '' + i;
    if (i < 10) id = '0' + id;
    // Cr�ation de l'item � cl� de type cha�ne
    rail_lst[id] = false;
  }
}