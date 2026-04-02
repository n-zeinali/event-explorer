<?php

namespace App\Http\Controllers;

use App\Contracts\EventServiceInterface;
use App\Support\ApiResponse;
use Illuminate\Http\JsonResponse;

class EventController extends Controller
{
    public function __construct(
        protected EventServiceInterface $eventService
    ) {}

    public function index(): JsonResponse
    {
        return ApiResponse::json(
            $this->eventService->getAll()
        );
    }
}