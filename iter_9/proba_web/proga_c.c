

unsigned int raschet(unsigned int g)
	{
	return (~g)^(g<<1)^(g>>1);
	}

