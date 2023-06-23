package garage.project.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class AppUserDetailsService implements UserDetailsService {

    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public AppUserDetailsService(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        var credentials = this.jdbcTemplate.query(
                "SELECT email, password, enabled FROM user_credentials WHERE email = ?", rs -> {
                    rs.next();
                    var email = rs.getString("email");
                    var password = rs.getString("password");
                    var enabled = rs.getBoolean("enabled");
                    return new Object[] {email, password, enabled};
                }, username);

        var authorities = this.jdbcTemplate
                .queryForList("SELECT authority FROM authorities WHERE email = ?", String.class, username)
                .stream().map(auth -> new Authority(auth)).toList();

        return new User(
                (String)credentials[0],
                (String)credentials[1],
                (Boolean)credentials[2],
                true,
                true,
                true,
                authorities);
    }

    public final class Authority implements GrantedAuthority {
        private final String authority;
        public Authority (String authority) {this.authority = authority;}

        @Override
        public String getAuthority() {return authority;}
    }
}
