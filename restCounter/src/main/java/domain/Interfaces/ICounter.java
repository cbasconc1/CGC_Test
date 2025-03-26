package domain.Interfaces;

public interface ICounter {
    int getValue();
    void setValue(int value);
    int increment();
    int decrement();
    int reset();
}