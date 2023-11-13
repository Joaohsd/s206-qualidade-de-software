package aula_inatel.star_wars;

import com.intuit.karate.junit5.Karate;

public class SwRunner {

    @Karate.Test
    Karate testSw() {
        return Karate.run("sw").relativeTo(getClass());
    }

}
