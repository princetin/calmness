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


Короткий ответ: одной нелинейной операции мало, потому что она действует только
на каждый байт по отдельности, а линейные операции нужны, чтобы размазать её эффект на весь блок.