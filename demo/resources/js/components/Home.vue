<script setup>

</script>

<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Oi lindo!</div>

                    <div class="card-body">
                        @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            Indicadores
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>
