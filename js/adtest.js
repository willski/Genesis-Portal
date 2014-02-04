

						var ads = [];
						ads[0] = '<a href="#" target="_blank" rel="nofollow"><img src="http://i.imgur.com/Kua889L.png" alt="SPONSOR_A" width="130" height="100">'
						ads[1] = '<a href="#" target="_blank" rel="nofollow"><img src="http://i.imgur.com/wR3PKSr.png" alt="SPONSOR_B" width="130" height="100">'
						ads[2] = '<a href="#" target="_blank" rel="nofollow"><img src="http://i.imgur.com/NyAWCvx.png" alt="SPONSOR_C" width="130" height="100">'
						ads[3] = '<a href="#" target="_blank" rel="nofollow"><img src="http://i.imgur.com/vEsrBuB.png" alt="SPONSOR_D" width="130" height="100">'
						//ads[4] = '<a href="#" target="_blank" rel="nofollow"><img src="http://i.imgur.com/hInAI7O.png" alt="SPONSOR_E" width="260" height="100">'
						//ads[5] = '<a href="#" target="_blank" rel="nofollow"><img src="http://i.imgur.com/hInAI7O.png" alt="SPONSOR_F" width="260" height="100">'
						//ads[6] = '<a href="#" target="_blank" rel="nofollow"><img src="http://i.imgur.com/hInAI7O.png" alt="SPONSOR_G" width="260" height="100">'
						//ads[7] = '<a href="#" target="_blank" rel="nofollow"><img src="http://i.imgur.com/hInAI7O.png" alt="SPONSOR_H" width="260" height="100">'
						//ads[8] = '<a href="#" target="_blank" rel="nofollow"><img src="http://i.imgur.com/BSj0trX.png" alt="SPONSOR_I" width="260" height="100">'
						//ads[9] = '<a href="#" target="_blank" rel="nofollow"><img src="http://i.imgur.com/Kjl0IjQ.png" alt="SPONSOR_J" width="260" height="100">'


						var x = 0;
                        $(document).ready(function(){
						//function rotate(ads) {
						while (x < ads.length) {
						   var sort = Math.floor(Math.random() * ads.length);
						   if (sort != 0) {

						        $('.ad-box').html(ads[sort]);
						        //ads[sort] = 0;
						        x++;
						        }
						    }
						//
						// }

                        })
