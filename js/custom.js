// Custom Script
// Developed by: Samson.Onna
var customScripts = {
    profile: function () {
        // portfolio
        if ($('.isotopeWrapper').length) {
            var $container = $('.isotopeWrapper');
            var $resize = $('.isotopeWrapper').attr('id');
            // initialize isotope
            $container.isotope({
                itemSelector: '.isotopeItem',
                resizable: false, // disable normal resizing
                masonry: {
                    columnWidth: $container.width() / $resize
                }
            });
            $("a[href='#top']").click(function () {
                $("html, body").animate({ scrollTop: 0 }, "slow");               
                return false;
            });
            $('.navbar-inverse').on('click', 'li a', function () {                
                $('.navbar-inverse .in').addClass('collapse').removeClass('in').css('height', '1px');
            });
            $('#filter a').click(function () {
                $('#filter a').removeClass('current');
                $(this).addClass('current');
                var selector = $(this).attr('data-filter');
                $container.isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 1000,
                        easing: 'easeOutQuart',
                        queue: false
                    }
                });
                return false;
            });
            $(window).smartresize(function () {
                $container.isotope({
                    // update columnWidth to a percentage of container width
                    masonry: {
                        columnWidth: $container.width() / $resize
                    }
                });
            });
        }
    },
    fancybox: function () {
        // fancybox
        $(".fancybox").fancybox();
    },
    onePageNav: function () {

        $('#mainNav').onePageNav({        
            currentClass: 'active',
            changeHash: false,
            scrollSpeed: 950,
            scrollThreshold: 0.2,
            filter: '',
            easing: 'swing',
            begin: function () {
                //I get fired when the animation is starting
            },
            end: function () {
                //I get fired when the animation is ending
            },
            scrollChange: function ($currentListItem) {
                //I get fired when you enter a section and I pass the list item of the section
            }
        });
    },
    slider: function () {
        $('#da-slider').cslider({
            autoplay: true,
            bgincrement: 0
        });
    }, 
	init: function () {
        customScripts.onePageNav();
        customScripts.profile();
        customScripts.fancybox();
        customScripts.slider(); 
    }
}
$('document').ready(function () {
    customScripts.init();
});



	// JavaScript code to update the copyright year
	const currentYear = new Date().getFullYear();
	document.getElementById('copyright-year').textContent = currentYear;



  function openModal() {
    document.getElementById('myModal').style.display = 'flex';
  }

  function closeModal() {
    document.getElementById('myModal').style.display = 'none';
  }




    // Function to open the modal
    function opengabModal() {
        $('#gabModal').modal('show');
    }
    
    // Enable Bootstrap tooltips
    $(function () {
        $('[data-toggle="tooltip"]').tooltip();
    });



    // Function to open the modal
    function openjoeModal() {
        $('#joeModal').modal('show');
    }
    
    // Enable Bootstrap tooltips
    $(function () {
        $('[data-toggle="tooltip"]').tooltip();
    });

    // Function to open the modal
    function openemsModal() {
        $('#emsModal').modal('show');
    }
    
    // Enable Bootstrap tooltips
    $(function () {
        $('[data-toggle="tooltip"]').tooltip();
    });

    // Function to open the modal
    function opengraceModal() {
        $('#graceModal').modal('show');
    }
    
    // Enable Bootstrap tooltips
    $(function () {
        $('[data-toggle="tooltip"]').tooltip();
    });


    // Function to open the modal
    function openJoyModal() {
        $('#joyModal').modal('show');
    }
    
    // Enable Bootstrap tooltips
    $(function () {
        $('[data-toggle="tooltip"]').tooltip();
    });


	// JavaScript to toggle dark mode
	function toggleDarkMode() {
		const body = document.body;
		body.classList.toggle('dark-mode');
	}



    function submitForm() {
      // Get form values
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;

      // Update confirmation message
      
      document.getElementById('sentEmail').innerText = email;
      
      // Hide the form and display the confirmation message
      document.getElementById('contactForm').style.display = 'none';
      document.getElementById('confirmationMessage').style.display = 'block';
    }

    function resetForm() {
      // Reset form values
      document.getElementById('contactForm').reset();

      // Display the form and hide the confirmation message
      document.getElementById('contactForm').style.display = 'block';
      document.getElementById('confirmationMessage').style.display = 'none';
    }






    