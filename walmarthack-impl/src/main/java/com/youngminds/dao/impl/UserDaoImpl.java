package com.youngminds.dao.impl;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.youngminds.dao.UserDao;
import com.youngminds.services.modal.User;

@Repository
@Transactional(readOnly=true)
public class UserDaoImpl implements UserDao {

	@Autowired
	SessionFactory sessionFactory;
	
	public UserDaoImpl() {
		System.out.println("UserDAO Impl Constructor ************** ");
	}
	
	@Override
	@Transactional(readOnly=false)
	public void inserUser(final User user) {
		
		Session session=sessionFactory.openSession();
		session.save(user);
	}

	@Override
	public User validateUser(User user) {
		User resultUser=null;
		/*User resultUser = null;
		Object params[] = new Object[] { user.getMobileNo().toString(), user.getPassword() };

		String sql = "SELECT * FROM users WHERE mobile_no=? and password=?";
		try {
			// resultUser=jdbcTemplate.queryForObject(sql, new UserMapper(),
			// params);
		} catch (Exception exp) {
			System.out.println(exp);
		}*/
		Criteria criteria=sessionFactory.openSession().createCriteria(User.class);
		criteria.add(Restrictions.eq("mobileNo", user.getMobileNo()))
		.add(Restrictions.eq("password", user.getPassword()));
		resultUser=(User) criteria.uniqueResult();
		return resultUser;

	}

	final class UserMapper implements RowMapper<User> {

		public User mapRow(ResultSet rs, int rowNum) throws SQLException {
			User user = new User();
			user.setMobileNo(new Long(rs.getString("mobile_no")));
			user.setName(rs.getString("name"));
			user.setEmail(rs.getString("email"));
			return user;
		}
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<User> showAllUsers() {
		Session session=sessionFactory.openSession();
		String hql="From User";
		List<User>  users=null;
		try{
			Query query=session.createQuery(hql);
			users=query.list();
		}catch(Exception e){
			System.out.println(e);
		}
		return users;
	}
}
