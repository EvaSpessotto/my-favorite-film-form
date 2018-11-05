import React, { Component } from 'react';

class FavoriteMovieForm extends Component {
	constructor(props){
		super(props);
		this.state = {
			name: '',
			poster: '',
			comment: ''
		}
	}

	handleChange(event){
		this.setState({
			[event.target.name]: event.target.value,
		});
	}

	handleSubmit(event){
		event.preventDefault();
		const url = 'http://92.175.11.66:3001/api/quests/movies/';

		fetch(url, {
			method: 'POST', 
			body: JSON.stringify(this.state), 
			headers:{
				'Content-Type': 'application/json'
			}
		})
		.then(res => res.json())
		.then(res => {
			if (res.error) {
				alert(res.error);
			} else {
				alert(`Film ajouté avec l'ID ${res}!`);
			}
		}).catch(e => {
			console.error(e);
			alert('Erreur lors de l\'ajout du film');
		});
	}



	render() {
			return (
					<div>
							<form onSubmit={this.handleSubmit.bind(this)}>
									<h1>Envoie ton film préféré</h1>
									<div>
										<input 
										type="text" 
										name="name"
										placeholder="Nom du film"
										style={{marginTop: '10px', width: '30%'}}
										onChange={this.handleChange.bind(this)}
										/>
									</div>
									<div>
										<input 
										type="url" 
										name="poster"
										placeholder="Url du poster"
										style={{marginTop: '10px', width: '30%'}}
										onChange={this.handleChange.bind(this)}
										/>
									</div>
									<div>
										<textarea 
										name="comment"
										placeholder="Pourquoi aimes-tu ce film"
										style={{marginTop: '10px', width: '30%', height: '100px'}}
										onChange={this.handleChange.bind(this)}
										/>
									</div>
									<input
										type="submit"
										style={{marginTop: '10px'}}
									/>
							</form>
					</div>
			);
	}
}

export default FavoriteMovieForm;