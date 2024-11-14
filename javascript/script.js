
            // Script to change the video URL when a menu item is clicked
            const videoLinks = document.querySelectorAll('[data-bs-toggle="modal"]');
            videoLinks.forEach(link => {
                link.addEventListener('click', function() {
                    const videoUrl = this.getAttribute('data-video');
                    const videoFrame = document.getElementById('videoFrame');
                    videoFrame.src = videoUrl;  // Set the video URL in the iframe
                });
            });

            // Reset the video URL when the modal is closed
            const videoModal = document.getElementById('videoModal');
            videoModal.addEventListener('hidden.bs.modal', function () {
                const videoFrame = document.getElementById('videoFrame');
                videoFrame.src = '';  // Reset the video URL to stop the video
            });