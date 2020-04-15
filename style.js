function showhideNavMenu() {
  var x = document.querySelector('nav');

  if(x.className === 'topnav-dropdown') {
    x.className = 'topnav-inline';
  } else {
    x.className = 'topnav-dropdown';
  }
  
}