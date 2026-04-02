<?php

namespace App\Support;

use Illuminate\Http\JsonResponse;

class ApiResponse
{
    public static function success(
        array $data = [],
        string $message = 'Request was successful.',
        int $status = 200
    ): array {
        return [
            'success' => true,
            'message' => $message,
            'data' => $data,
            'status' => $status,
        ];
    }

    public static function error(
        string $message = 'Something went wrong.',
        array $data = [],
        int $status = 500
    ): array {
        return [
            'success' => false,
            'message' => $message,
            'data' => $data,
            'status' => $status,
        ];
    }

    public static function json(array $payload): JsonResponse
    {
        return response()->json([
            'success' => $payload['success'],
            'message' => $payload['message'],
            'data' => $payload['data'],
        ], $payload['status']);
    }
}