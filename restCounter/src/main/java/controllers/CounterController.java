package controllers;

import infrastructure.Services.CounterService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/counter") // Ruta base
@CrossOrigin(origins = "http://localhost:4200")
public class CounterController {

    private final CounterService _counterUseCase;

    public CounterController(CounterService counterUseCase) {
        this._counterUseCase = counterUseCase;
    }

    @GetMapping
    public CounterResponse getValue() {
        return new CounterResponse(_counterUseCase.getValue());
    }

    @PostMapping("/increment")
    public CounterResponse increment() {
        return new CounterResponse(_counterUseCase.increment());
    }

    @PostMapping("/decrement")
    public CounterResponse decrement() {
        return new CounterResponse(_counterUseCase.decrement());
    }

    @PostMapping("/reset")
    public CounterResponse reset() {

        return new CounterResponse(_counterUseCase.reset());
    }

    public static class CounterResponse {
        private int value;

        public CounterResponse(int value) {
            this.value = value;
        }

        public int getValue() {
            return value;
        }
    }
}
