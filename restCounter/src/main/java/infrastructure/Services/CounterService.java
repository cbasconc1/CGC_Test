package infrastructure.Services;

import domain.Interfaces.ICounter;
import org.springframework.stereotype.Service;

@Service
public class CounterService implements ICounter {

    private int value = 0; // persistencia del valor del contador

    @Override
    public int getValue() {
        return value;
    }

    @Override
    public void setValue(int value) {
        this.value = value;
    }

    @Override
    public int increment() {
        return ++value;
    }

    @Override
    public int decrement() {
        if(value <= 0)
        {
            return 0;
        }
        return --value;
    }

    @Override
    public int reset() {
        value = 0;
        return value;
    }
}