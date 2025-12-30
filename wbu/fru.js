document.getElementById('animate-btn').addEventListener('click', () => {
    const petals = document.querySelectorAll('.petal');

    petals.forEach((petal, index) => {
        petal.classList.remove('bloom');
        void petal.offsetWidth; // reset animation

        setTimeout(() => {
            petal.classList.add('bloom');
        }, index * 300); // 300ms delay per petal
    });
});
