
    const wrapper = document.querySelector('.wrapper');
    const navigation = document.querySelector('.navigation');
    document.querySelector('.toggle').onclick = function(){
         this.classList.toggle('active');
         navigation.classList.toggle('active');
          wrapper.classList.toggle('active');
    }