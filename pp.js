<script>
    // Простое приветствие
    document.addEventListener('DOMContentLoaded', function() {
        const title = document.querySelector('h1') || document.body;
        title.insertAdjacentHTML('afterend',
            '<p style="color: green; font-weight: bold; font-size: 20px;">✅ JavaScript работает!</p>'
        );
        console.log('JS подключен успешно');
    });
</script>