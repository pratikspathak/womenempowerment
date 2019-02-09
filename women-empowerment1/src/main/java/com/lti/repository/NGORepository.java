package com.lti.repository;

import com.lti.entity.NGO;

public interface NGORepository {

	public void addNGO(NGO ngo);

	public NGO fetchNGO(int id);

}
