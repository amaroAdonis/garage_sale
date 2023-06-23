package garage.project.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.context.DelegatingSecurityContextRepository;
import org.springframework.security.web.context.HttpSessionSecurityContextRepository;
import org.springframework.security.web.context.SecurityContextRepository;

import javax.sql.DataSource;

@Configuration
public class AppSecurityConfig {

    private DataSource dataSource;

    @Autowired
    public AppSecurityConfig(DataSource dataSource) {this.dataSource = dataSource;}

    @Bean
    public SecurityFilterChain filterChain(
            HttpSecurity httpSecurity,
            AppUserDetailsService userDetailsService,
            SecurityContextRepository securityContextRepository) throws Exception {
        httpSecurity
                .authorizeHttpRequests(authorize -> authorize
                        .requestMatchers("").permitAll()
                        .anyRequest().permitAll()
                )
                .userDetailsService(userDetailsService)
                .securityContext(s -> s.securityContextRepository(
                        new DelegatingSecurityContextRepository(securityContextRepository)
                )).csrf(c -> c.disable());
        return httpSecurity.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {return new BCryptPasswordEncoder(); }

    @Bean
    public DaoAuthenticationProvider authProvider(PasswordEncoder passwordEncoder, UserDetailsService userDetailsService) {
        var provider = new DaoAuthenticationProvider();
        provider.setPasswordEncoder(passwordEncoder);
        provider.setUserDetailsService(userDetailsService);
        return provider;
    }

    @Bean
    public SecurityContextRepository securityContextRepository() {return new HttpSessionSecurityContextRepository();
    }

}
