package pl.pw.elka.topt;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan("pl.pw.elka.topt")
public class ToptApplication {
    public static void main(String[] args) {
        SpringApplication.run(ToptApplication.class, args);
    }
}
