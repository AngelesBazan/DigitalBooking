package com.example.digitalbooking.config;

import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import static org.springframework.security.config.http.SessionCreationPolicy.STATELESS;

@RequiredArgsConstructor
@EnableWebSecurity
@Configuration
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {
    private final UserDetailsService jwtUserDetailsService;
    private final JWTRequestFilter jwtRequestFilter;

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    @Override
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }

    @Bean
    public BCryptPasswordEncoder bCryptPasswordEncoder(){
        return new BCryptPasswordEncoder();
    }


    @Override
    public void configure(HttpSecurity http) throws Exception {

        http.cors().and().csrf().disable();

        http.authorizeRequests().antMatchers(HttpMethod.POST,"/register/**").permitAll();
        http.authorizeRequests().antMatchers(HttpMethod.GET,"/products/**").permitAll();
        http.authorizeRequests().antMatchers(HttpMethod.GET,"/categories/**").permitAll();
        http.authorizeRequests().antMatchers(HttpMethod.GET,"/characteristics/**").permitAll();
        http.authorizeRequests().antMatchers(HttpMethod.GET,"/cities/**").permitAll();
        http.authorizeRequests().antMatchers(HttpMethod.GET,"/images/**").permitAll();
        http.authorizeRequests().antMatchers(HttpMethod.POST,"/users/**").permitAll();
        http.authorizeRequests().antMatchers(HttpMethod.GET,"/bookings/**").permitAll();
        http.authorizeRequests().antMatchers(HttpMethod.GET,"/productsview/**").permitAll();
        http.authorizeRequests().antMatchers(HttpMethod.GET,"/characteristicsview/**").permitAll();

        http.authorizeRequests().antMatchers(HttpMethod.POST, "/products/**").hasAnyAuthority("ADMIN");
        http.authorizeRequests().antMatchers(HttpMethod.PUT, "/products/**").hasAnyAuthority("ADMIN");
        http.authorizeRequests().antMatchers(HttpMethod.DELETE, "/products/**").hasAnyAuthority("ADMIN");

        http.authorizeRequests().antMatchers(HttpMethod.POST, "/categories/**").hasAnyAuthority("ADMIN");
        http.authorizeRequests().antMatchers(HttpMethod.PUT, "/categories/**").hasAnyAuthority("ADMIN");
        http.authorizeRequests().antMatchers(HttpMethod.DELETE, "/categories/**").hasAnyAuthority("ADMIN");

        http.authorizeRequests().antMatchers(HttpMethod.POST, "/characteristics/**").hasAnyAuthority("ADMIN");
        http.authorizeRequests().antMatchers(HttpMethod.PUT, "/characteristics/**").hasAnyAuthority("ADMIN");
        http.authorizeRequests().antMatchers(HttpMethod.DELETE, "/characteristics/**").hasAnyAuthority("ADMIN");

        http.authorizeRequests().antMatchers(HttpMethod.POST, "/cities/**").hasAnyAuthority("ADMIN");
        http.authorizeRequests().antMatchers(HttpMethod.PUT, "/cities/**").hasAnyAuthority("ADMIN");
        http.authorizeRequests().antMatchers(HttpMethod.DELETE, "/cities/**").hasAnyAuthority("ADMIN");

        http.authorizeRequests().antMatchers(HttpMethod.POST, "/images/**").hasAnyAuthority("ADMIN");
        http.authorizeRequests().antMatchers(HttpMethod.PUT, "/images/**").hasAnyAuthority("ADMIN");
        http.authorizeRequests().antMatchers(HttpMethod.DELETE, "/images/**").hasAnyAuthority("ADMIN");

        http.authorizeRequests().antMatchers("/roles/**").hasAnyAuthority("ADMIN");

        http.authorizeRequests().antMatchers("/users/email/{email}").authenticated();
        http.authorizeRequests().antMatchers(HttpMethod.POST,"/bookings/**").authenticated();
        http.authorizeRequests().antMatchers("/authenticate").permitAll().anyRequest().authenticated()
                .and().sessionManagement().sessionCreationPolicy(STATELESS);

        http.addFilterBefore(jwtRequestFilter, UsernamePasswordAuthenticationFilter.class);

    }

    @Override
    public void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(jwtUserDetailsService).passwordEncoder(passwordEncoder());
    }
}
