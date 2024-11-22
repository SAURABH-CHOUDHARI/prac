const follower = document.getElementById('follower');
    
    document.addEventListener('mousemove', (e) => {
      const { clientX, clientY } = e;
      follower.style.left = clientX + 'px';
      follower.style.top = clientY + 'px';
    })