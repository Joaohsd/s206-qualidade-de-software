package aula_inatel.pokemon;

import com.intuit.karate.junit5.Karate;

public class PokeRunner {

    @Karate.Test
    Karate testSw() {
        return Karate.run("pokemon").relativeTo(getClass());
    }

}
