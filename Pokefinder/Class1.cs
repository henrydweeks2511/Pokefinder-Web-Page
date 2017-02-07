using System;

public class Class1
{
	public Class1()
	{
        if (format == "city")
        {
            SqlCommand cmd = new SqlCommand("SELECT TOP 25 pokemonId AS ID, pokemonName AS `Name`, COUNT(*) AS `appearances` FROM poke_data WHERE city LIKE '*" + str + "*' GROUP BY pokemonId, pokemonName ORDER BY 3 DESC LIMIT 25;");
        }
        else if (format == "name")
        {
            SqlCommand cmd = new SqlCommand("SELECT TOP 25 city, COUNT(*) AS Appearances FROM poke_data WHERE pokemonName=" + str + " GROUP BY city ORDER BY 2 DESC;");
        }
        return cmd;
    }
}
