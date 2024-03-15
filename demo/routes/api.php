<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Aqui é onde você pode registrar as rotas da API para sua aplicação. Estas
| rotas são carregadas pelo RouteServiceProvider e todas serão atribuídas ao
| grupo de middleware "api". Faça algo incrível!
|
*/

// Rota protegida por autenticação Sanctum para recuperar informações do usuário
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Rotas API usando apiResource para manter a consistência e facilitar o desenvolvimento
Route::apiResource('cliente', 'App\Http\Controllers\ClienteController');
Route::apiResource('carro', 'App\Http\Controllers\CarroController');
Route::apiResource('locacao', 'App\Http\Controllers\LocacaoController');
Route::apiResource('marca', 'App\Http\Controllers\MarcaController');
Route::apiResource('modelo', 'App\Http\Controllers\ModeloController');
