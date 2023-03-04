package abisoft.api.exception;

/**
 *
 * @author Ricardo
 */
public class NoSuchEntityExistsException extends RuntimeException {

    private String message;

    public NoSuchEntityExistsException() {
    }

    public NoSuchEntityExistsException(String msg) {
        super(msg);
        this.message = msg;
    }
}
