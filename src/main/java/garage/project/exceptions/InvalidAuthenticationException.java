package garage.project.exceptions;

import org.springframework.security.core.AuthenticationException;

public class InvalidAuthenticationException extends AuthenticationException {
    public InvalidAuthenticationException(String msg, Throwable cause) {
        super(msg, cause);
    }

    public InvalidAuthenticationException(String msg) {
        super(msg);
    }
}
