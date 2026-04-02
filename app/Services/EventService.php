<?php

namespace App\Services;

use App\Contracts\EventServiceInterface;
use App\Support\ApiResponse;
use Illuminate\Support\Facades\File;
use JsonException;
use Throwable;

class EventService implements EventServiceInterface
{
    public function getAll(): array
    {
        try {
            $path = config('events.data_path');

            if (! $path || ! File::exists($path)) {
                return ApiResponse::error(
                    message: 'Events data file was not found.',
                    data: [],
                    status: 404
                );
            }

            $content = File::get($path);
            $events = json_decode($content, true, 512, JSON_THROW_ON_ERROR);

            if (! is_array($events)) {
                return ApiResponse::error(
                    message: 'Events data format is invalid.',
                    data: [],
                    status: 422
                );
            }

            return ApiResponse::success(
                data: $events,
                message: 'Events loaded successfully.',
                status: 200
            );
        } catch (JsonException $e) {
            report($e);

            return ApiResponse::error(
                message: 'Events JSON is invalid.',
                data: [],
                status: 422
            );
        } catch (Throwable $e) {
            report($e);

            return ApiResponse::error(
                message: 'An unexpected error occurred while loading events.',
                data: [],
                status: 500
            );
        }
    }
}